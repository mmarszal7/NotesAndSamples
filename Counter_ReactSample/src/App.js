import React, { Component } from 'react';
import Counter from './components/counter';
import Home from './components/home';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class App extends Component {
    render() {
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
                    <Route exact path="/" component={Home} />
                    <Route path="/counter" component={Counter} />
                </div>
            </Router>
        );
    }
}
