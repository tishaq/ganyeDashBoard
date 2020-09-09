import React from 'react'
import {
    Switch,
    Route,
    BrowserRouter

} from "react-router-dom";
import App from './App';
import AgentTickets from './AgentTickets'
import Markets from './Markets';
export default function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/"><App /></Route>
                <Route exact path="/tickets"><AgentTickets /></Route>
                <Route exact path="/markets"><Markets /></Route>
            </Switch>
        </BrowserRouter>
    )
}
