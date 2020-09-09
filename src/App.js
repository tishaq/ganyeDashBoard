import React, { useState, useEffect } from 'react';
import { MDBContainer } from "mdbreact";
import { Bar } from "react-chartjs-2";
import * as queries from './graphql/queries'
import DateRangePicker from "react-bootstrap-daterangepicker";
import moment from "moment";
import * as util from "./util";
import Menu from './components/Menu';
import Nav from './components/Nav';
import loader from "./loader.gif";

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

function App() {
  const [startDate, setStartDate] = useState(util.getTodayDate(new Date()));
  const [stopDate, setStopDate] = useState(util.getTodayDate(new Date()));
  const [ticketSummary, setTicketSummary] = useState({});
  // const [loadButtonStatus, setLoadButtonStatus] = useState(true);
  const [isLoader, setIsLoader] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  useEffect(() => {
    loadAgentTickets(new Date(), new Date());
  }, []);
  const dataBar = {
    labels: Object.keys(ticketSummary).map(value => value),
    datasets: [
      {
        label: "Total Amount (NGN)",
        data: Object.values(ticketSummary).map(value => value),
        backgroundColor: Object.keys(ticketSummary).map((value) =>
          `rgba(${util.getRandomColorValue()}, ${util.getRandomColorValue()},${util.getRandomColorValue()},0.4)`
        ),
        borderWidth: 2,
        borderColor: Object.keys(ticketSummary).map((value) =>
          `rgba(${util.getRandomColorValue()}, ${util.getRandomColorValue()},${util.getRandomColorValue()},0.4)`
        )
      }
    ]
  };
  const barChartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      xAxes: [
        {
          // barPercentage: 1,
          gridLines: {
            display: true,
            color: "rgba(0, 0, 0, 0.1)"
          }
        }
      ],
      yAxes: [
        {
          gridLines: {
            display: true,
            color: "rgba(0, 0, 0, 0.1)"
          },
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  };
  const loadAgentTickets = async (start, end) => {
    setIsLoader(true);
    setStartDate(util.getTodayDate(start));
    setStopDate(util.getTodayDate(end));

    let raw = {};
    let nextToken = null;
    let results = [];
    let d = {};
    const inputFilter = {

      date: { between: [util.getTodayDate(start), util.getTodayDate(end)] }

    }

    try {
      do {
        raw = await API.graphql(
          graphqlOperation(queries.listTickets,
            {
              filter: inputFilter,
              limit: 10000,
              nextToken: nextToken
            }
          )
        );
        nextToken = raw.data.listTickets.nextToken;
        raw.data.listTickets.items.map(value => results.push(value));
        console.log(results);
        results.forEach((element) => {
          const agent = element.collector.name + "\n(" + element.collector.id + ")";
          if (!d[agent]) {
            d[agent] = [];
          }

          d[agent].push(element.fee);

        });
        // console.log(d);
        setTicketSummary(d);
      } while (nextToken);
    } catch (error) {
      console.log(error);
    }
    setIsLoader(false);
  };
  return (
    <div id="wrapper" >
      <Menu setToggleMenu={setToggleMenu} toggleMenu={toggleMenu} />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Nav setToggleMenu={setToggleMenu} toggleMenu={toggleMenu} />
          <div className="container-fluid">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="card shadow mb-lg-1">
                <div className="card-header py-3"
                  style={{
                    background: 'linear-gradient(to bottom, #EDC7B7, #FFFFFF)', color: '#5A0028'
                  }}>
                  <h6 className="font-weight-bold text-dark text-center" > Ticket Pool

                  </h6>
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
                    <button className="btn btn-user"
                      style={{ backgroundColor: '#AC3B61', color: '#fff' }}><span className="fa fa-calendar-plus"></span>&nbsp;{startDate} - {stopDate} <span className="fa fa-caret-down"></span></button>
                  </DateRangePicker>
                </div>


                <div className="card-body">
                  <div className="table-responsive">
                    {isLoader ? <center><img src={loader} alt="Loading ..." /> </center> :

                      <MDBContainer>
                        <Bar data={dataBar} options={barChartOptions} />
                      </MDBContainer>
                    }
                  </div>

                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
