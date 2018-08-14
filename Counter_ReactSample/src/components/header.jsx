import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

const Header = ({ location }) => (
    <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <span className="navbar-brand">React Sample</span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav mr-auto">
                    <li className={location.pathname === '/counter' ? 'nav-item active' : 'nav-item'}>
                        <Link className="nav-link" to="/counter">Counter</Link>
                    </li>
                    <li className={location.pathname === '/placeholder' ? 'nav-item active' : 'nav-item'}>
                        <Link className="nav-link" to="/placeholder">Placeholder</Link>
                    </li>
                    <li className={location.pathname === '/timer' ? 'nav-item active' : 'nav-item'}>
                        <Link className="nav-link" to="/timer">Timer</Link>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
)

export default withRouter(connect()(Header));