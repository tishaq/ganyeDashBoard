import React, { useState, useEffect } from 'react';
import * as queries from './graphql/queries'
import { MDBDataTableV5 } from "mdbreact";
import { CSVLink } from 'react-csv'
import * as util from "./util";
import loader from "./loader.gif"
import moment from "moment";
import DateRangePicker from "react-bootstrap-daterangepicker";
import Menu from './components/Menu';
import Nav from './components/Nav';
import { API, graphqlOperation } from "aws-amplify";
import Amplify from "aws-amplify";
// import configuration from "./aws-exports";
// Amplify.configure(configuration);
Amplify.configure({
    aws_appsync_graphqlEndpoint: process.env.REACT_APP_appsync_graphqlEndpoint,
    aws_appsync_region: process.env.REACT_APP_appsync_region,
    aws_appsync_authenticationType:
        process.env.REACT_APP_appsync_authenticationType,
    aws_appsync_apiKey: process.env.REACT_APP_appsync_apiKey
});


export default function AgentTickets() {
    const [startDate, setStartDate] = useState(util.getTodayDate(new Date()));
    const [stopDate, setStopDate] = useState(util.getTodayDate(new Date()));
    const [agentId, setAgentId] = useState("");
    const [agents, setAgents] = useState([]);
    const [tickets, setTickets] = useState([]);
    const [ticketSummary, setTicketSummary] = useState({});
    const [ticketSummaryTotal, setTicketSummaryTotal] = useState(0);
    const [loadButtonStatus, setLoadButtonStatus] = useState(true);
    const [isLoader, setIsLoader] = useState(false);
    const [toggleMenu, setToggleMenu] = useState(false);
    useEffect(() => {
        loadAgents();
    }, []);
    const ticketDataTable = {
        columns: [
            {
                label: 'S/N',
                field: 'sn',
                sort: 'asc',

            },
            {
                label: 'Ticket Id',
                field: 'ticketId',
                sort: 'asc',

            },
            {
                label: 'Tax Id',
                field: 'taxId',
                sort: 'asc',

            },
            {
                label: 'Ticket Type',
                field: 'ticketType',
                sort: 'asc',

            },
            {
                label: 'Item Name',
                field: 'itemName',
                sort: 'asc',

            },
            {
                label: 'Quantity',
                field: 'quantity',
                sort: 'asc',

            },
            {
                label: 'Amount',
                field: 'amount',
                sort: 'asc',

            },
            {
                label: 'Date',
                field: 'date',
                sort: 'asc',

            }
        ],
        rows: tickets.map((ticket, index) => ({

            sn: index + 1,
            ticketId: ticket.id,
            taxId: ticket.taxId,
            ticketType: ticket.ticketType,
            itemName: ticket.itemName,
            quantity: ticket.quantity,
            amount: util.formatMoney(ticket.fee),
            date: ticket.date
        }))
    };
    const ticketSummaryDataTable = {
        columns: [
            {
                label: 'S/N',
                field: 'sn',
                sort: 'asc',

            },
            {
                label: 'Colletion',
                field: 'collection',
                sort: 'asc',

            },
            {
                label: 'Quantity',
                field: 'quantity',
                sort: 'asc',

            },
            {
                label: 'Amount',
                field: 'amount',
                sort: 'asc',

            }
        ],
        rows: Object.entries(ticketSummary).map((ticket, index) => ({
            sn: index + 1,
            collection: ticket[0],
            quantity: ticket[1].length,
            amount: util.formatMoney(ticket[1].reduce((curr, prev) => curr + prev))
        }))
    };
    const loadAgentTickets = async (start, end) => {
        setIsLoader(true);
        setStartDate(util.getTodayDate(start));
        setStopDate(util.getTodayDate(end));
        if (agentId === "") {
            setIsLoader(false);
            return;
        }
        let raw = {};
        let nextToken = null;
        let results = [];
        let total = 0;
        let d = {};
        let inputFilter = {}
        if (agentId === "All") {
            inputFilter = {

                date: { between: [util.getTodayDate(start), util.getTodayDate(end)] }
            }
        } else {
            inputFilter = {
                and: [
                    { date: { between: [util.getTodayDate(start), util.getTodayDate(end)] } },
                    { ticketCollectorId: { eq: agentId } }
                ]
            }
        }
        try {
            do {
                raw = await API.graphql(
                    graphqlOperation(queries.listTickets,
                        {
                            filter: inputFilter,
                            limit: 10000,
                            nextToken: nextToken
                        })
                );
                nextToken = raw.data.listTickets.nextToken;
                raw.data.listTickets.items.map(value => results.push(value));
                console.log(results);
                setTickets(results)
                results.forEach((element) => {
                    const item = element.ticketType + "/" + element.itemName;
                    if (!d[item]) {
                        d[item] = [];
                    }

                    d[item].push(element.fee);
                    total += element.fee

                });
                // console.log(d);
                setTicketSummary(d);
                setTicketSummaryTotal(util.formatMoney(total));
            } while (nextToken);
        } catch (error) {
            console.log(error);
        }
        setIsLoader(false);
    };
    const loadAgents = async () => {
        // const managerId = e.target.value;
        // console.log("loadManagers()");
        let raw = {};
        let nextToken = null;
        let results = [];
        //list managers
        // const inputFilter = {
        //     collectorManagerId: { eq: managerId }
        // }
        try {
            do {
                raw = await API.graphql(
                    graphqlOperation(queries.listCollectors, {
                        limit: 10000,
                        nextToken: nextToken
                    })
                );
                nextToken = raw.data.listCollectors.nextToken;
                raw.data.listCollectors.items.map(value => results.push(value));
            } while (nextToken);
            console.log(results);
            setAgents(results);

        } catch (errors) {
            console.log(errors);
        }


    };
    return (
        <div id="wrapper" >
            <Menu setToggleMenu={setToggleMenu} toggleMenu={toggleMenu} />
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <Nav setToggleMenu={setToggleMenu} toggleMenu={toggleMenu} />
                    <div className="container-fluid">
                        <center>
                            <h2 style={{ color: "#5A0028" }}>Tickets</h2>
                            <select className="form-control-sm" style={{
                                backgroundColor: '#fff', color: '#AC3B61', border: '3px solid #AC3B61'
                            }}
                                defaultValue="selected" onChange={e => { setAgentId(e.target.value); setLoadButtonStatus(false); }}>

                                <option disabled value="selected">--Select Agent--</option>

                                {agents.map((agent, index) => <option key={index} value={agent.id}>{agent.name}--{agent.id}</option>)}
                                <option value="All">All Agent</option>
                            </select>
                            <DateRangePicker startDate={new Date()}
                                endDate={new Date()}
                                ranges={{
                                    'Today': [moment(), moment()],
                                    'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                                    'Last 7 Days': [moment().subtract(6, 'days'), moment()],
                                    'Last 30 Days': [moment().subtract(29, 'days'), moment()],
                                    'This Month': [moment().startOf('month'), moment().endOf('month')],
                                    'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
                                }}
                                showCustomRangeLabel={true}

                                onApply={(e, p) => {

                                    loadAgentTickets(p.startDate._d, p.endDate._d);

                                }}>

                                {isLoader ? <img src={loader} width="150" height="100" alt="Loading ..." /> :
                                    <button className="btn btn-user" disabled={loadButtonStatus}
                                        style={{ backgroundColor: '#AC3B61', color: '#fff' }}>
                                        <span className="fa fa-calendar-plus"></span>&nbsp;&nbsp;{startDate} - {stopDate}
                                        &nbsp;&nbsp;<span className="fa fa-caret-down"></span></button>}
                            </DateRangePicker>

                        </center>
                        <br />
                        <div className="container-fluid">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="card shadow mb-lg-1">
                                    <div className="card-header py-3"
                                        style={{
                                            background: 'linear-gradient(to bottom, #EDC7B7, #FFFFFF)', color: '#5A0028'
                                        }}>
                                        <h6 className="font-weight-bold text-dark text-center" > Ticket Summary {ticketSummaryTotal ? ticketSummaryTotal : ""} </h6>
                                    </div>


                                    <div className="card-body">
                                        <div className="table-responsive">
                                            {isLoader ? <center><img src={loader} alt="Loading ..." /></center> :
                                                <MDBDataTableV5
                                                    striped
                                                    bordered
                                                    hover
                                                    data={ticketSummaryDataTable}
                                                />
                                            }
                                        </div>

                                    </div>


                                </div>
                            </div>
                        </div>
                        <div className="container-fluid">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="card shadow mb-lg-1">
                                    <div className="card-header py-3"
                                        style={{
                                            background: 'linear-gradient(to bottom, #EDC7B7, #FFFFFF)', color: '#5A0028'
                                        }}>
                                        <h6 className="font-weight-bold text-dark text-center" > Ticket Records {agentId ? " ( " + agentId + " )" : ""} </h6>

                                        <CSVLink data={
                                            tickets.map((ticket, index) => ({
                                                sn: index + 1,
                                                ticketId: ticket.id,
                                                taxId: ticket.taxId,
                                                ticketType: ticket.ticketType,
                                                itemName: ticket.itemName,
                                                quantity: ticket.quantity,
                                                amount: ticket.fee * ticket.quantity,
                                                date: ticket.date
                                            }))
                                        } filename="tickets.csv" className="btn btn-user" disabled={isLoader} style={{ backgroundColor: '#AC3B61', color: '#fff' }}>
                                            <span className="fa fa-download"></span>&nbsp;&nbsp;Export to CVS
                                        &nbsp;&nbsp;</CSVLink>
                                    </div>


                                    <div className="card-body">
                                        <div className="table-responsive">
                                            {isLoader ? <center><img src={loader} alt="Loading ..." /></center> :
                                                <MDBDataTableV5
                                                    striped
                                                    bordered
                                                    hover
                                                    data={ticketDataTable}
                                                    exportToCSV

                                                />
                                            }
                                        </div>

                                    </div>


                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
