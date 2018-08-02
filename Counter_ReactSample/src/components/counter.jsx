import React, { Component } from 'react';

export default class Counter extends Component {
    state = {
        count: 0,
    };

    render() {
        return (
            <div>
                <span>Counter: {this.state.count}</span>
                <button onClick={this.handleIncrement}>Add</button>
            </div>
        );
    }

    handleIncrement = () => {
        this.setState({ count: this.state.count + 1 });
    }
}
