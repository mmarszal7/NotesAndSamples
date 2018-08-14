import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Counters from './components/counters';
import Header from './components/header';
import Timer from './components/timer';
import Placeholder from './components/placeholder';

export default class App extends Component {
    render() {
        return (
            <Router>
                <React.Fragment>
                    <Header />
                    <main role="main" className="container mt-3">
                        <Route exact={true} path="/" component={() => <Redirect to="/counter" />} />
                        <Route path="/counter" component={Counters} />
                        <Route path="/timer" component={Timer} />
                        <Route path="/placeholder" component={Placeholder} />
                    </main>
                </React.Fragment>
            </Router>
        );
    }
}
