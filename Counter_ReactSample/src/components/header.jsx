import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
    state = {
        defaultLink: true
    };

    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <span className="navbar-brand">React Sample</span>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav mr-auto">
                            <li className={this.state.defaultLink ? 'nav-item active' : 'nav-item'}>
                                <Link onClick={this.handleRouting} className="nav-link" to="/">Home</Link>
                            </li>
                            <li className={!this.state.defaultLink ? 'nav-item active' : 'nav-item'}>
                                <Link onClick={this.handleRouting} className="nav-link" to="/counters">Counters</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }

    handleRouting = () => {
        this.setState({ defaultLink: !this.state.defaultLink });
    }
}
