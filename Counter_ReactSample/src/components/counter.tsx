import React, { Component } from 'react';

export default class Counter extends Component {
    public state = {
        count: 0,
        hidden: false
    };

    public render() {
        return (
            <div className={this.state.hidden ? 'd-none mt-2' : 'mt-2'}>
                <span>Counter: {this.state.count}</span>
                <button className="btn btn-primary ml-2" onClick={this.handleIncrement}>+</button>
                <button className="btn btn-primary ml-2" onClick={this.handleDecrement}>-</button>
                <button className="btn btn-warning ml-2" onClick={this.handleDelete}>Delete</button>
            </div>
        );
    }

    private handleIncrement = () => {
        this.setState({ count: this.state.count + 1 });
    }

    private handleDecrement = () => {
        this.setState({ count: this.state.count - 1 });
    }

    private handleDelete = () => {
        this.setState({ hidden: true });
    }
}
