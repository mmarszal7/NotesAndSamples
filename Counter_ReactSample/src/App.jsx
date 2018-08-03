import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Counters from './components/counters';
import Header from './components/header';
import Home from './components/home';

export default class App extends Component {
    render() {
        return (
            <Router>
                <React.Fragment>
                    <Header />
                    <main role="main" className="container">
                        <h1 className="mt-5">Welcome to React</h1>
                        <Route exact={true} path="/" component={Home} />
                        <Route path="/counters" component={Counters} />
                    </main>
                </React.Fragment>
            </Router>
        );
    }
}
