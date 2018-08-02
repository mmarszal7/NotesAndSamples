import React, { Component } from 'react';

export default class Counter extends Component {
    public state = {
        count: 0,
    };

    public render() {
        return (
            <div>
                <span>Counter: {this.state.count}</span>
                <button onClick={this.handleIncrement}>Add</button>
            </div>
        );
    }

    public handleIncrement = () => {
        this.setState({ count: this.state.count + 1 });
    }
}
