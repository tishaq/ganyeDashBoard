import React from 'react';
import {
    BrowserRouter as Router,
} from "react-router-dom";

export default function Menu(props) {

    return (
        <Router>
            <div>
                <ul className={"navbar-nav sidebar sidebar-dark " + (props.toggleMenu ? "toggled" : "")} id="accordionSidebar" style={{ background: 'linear-gradient(to bottom, #AC3B61, #EDC7B7)', color: '#5A0028' }}>
                    <a to="/" className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                        <div className="sidebar-brand-icon">
                            <img src="img/favcon.png" width="40" height="45" alt="" /></div>
                        <div className="sidebar-brand-text mx-3">Ticketing</div>
                    </a>
                    <hr className="sidebar-divider my-0" />
                    <li className="nav-item">
                        <a to="/" className="nav-link" href="/">
                            <i className="fas fa-fw fa-tachometer-alt"></i>
                            <span>Dashboard</span></a>
                    </li>
                    {/* <hr className="sidebar-divider" />
                    <div className="sidebar-heading">Aggregator</div> */}
                    <hr className="sidebar-divider" />
                    <li className="nav-item" >
                        <a to="/markets" className="nav-link" href="/markets">
                            <i className="fas fa-fw fa-mobile-alt"></i>
                            <span>Tickets By Markets</span></a>
                    </li>

                    <hr className="sidebar-divider" />
                    <li className="nav-item" >
                        <a to="/tickets" className="nav-link" href="/tickets">
                            <i className="fas fa-fw fa-mobile-alt"></i>
                            <span>Tickets By Agent</span></a>
                    </li>

                    {/* <li className="nav-item">
                    <a className="nav-link" href="/eports.html">
                        <i className="fas fa-fw fa-chart-bar"></i>
                        <span>Summary</span></a>
                </li> */}
                    <hr className="sidebar-divider d-none d-md-block" />
                    <div className="text-center d-none d-md-inline">
                        <button className="rounded-circle border-0" id="sidebarToggle" onClick={e => { props.setToggleMenu(!props.toggleMenu) }}></button>
                    </div>

                </ul>
            </div>
        </Router>

    )
}
