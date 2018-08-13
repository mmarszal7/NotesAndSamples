import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Counters from './components/counters';
import Header from './components/header';
import Home from './components/home';
import Timer from './components/timer';
import Placeholder from './components/placeholder';

export default class App extends Component {
    render() {
        return (
            <Router>
                <React.Fragment>
                    <Header />
                    <main role="main" className="container">
                        <div className="mt-5">
                            {/* <h1>React Sample</h1> */}
                            <Route exact={true} path="/" component={Home} />
                            <Route path="/counter" component={Counters} />
                            <Route path="/timer" component={Timer} />
                            <Route path="/placeholder" component={Placeholder} />
                        </div>
                    </main>
                </React.Fragment>
            </Router>
        );
    }
}
