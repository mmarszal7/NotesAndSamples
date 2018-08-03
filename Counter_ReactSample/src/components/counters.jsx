import React, { Component } from 'react';
import Counter from './counter';

export default class Counters extends Component {

    render() {
        return (
            <div>
                <button>Reset</button>
                <Counter />
                <Counter />
                <Counter />
                <Counter />
            </div>
        );
    }
}
