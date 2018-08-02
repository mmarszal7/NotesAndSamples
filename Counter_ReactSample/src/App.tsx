import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Counter from './components/counter';
import Home from './components/home';

export default class App extends Component {
    public render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/counter">Counter</Link>
                        </li>
                    </ul>

                    <hr />

                    <h1>Welcome to React</h1>
                    <Route exact={true} path="/" component={Home} />
                    <Route path="/counter" component={Counter} />
                </div>
            </Router>
        );
    }
}
