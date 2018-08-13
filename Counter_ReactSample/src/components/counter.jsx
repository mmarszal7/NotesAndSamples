import React from 'react';
import { connect } from 'react-redux';
import { incrementCounter, decrementCounter, deteleCounter } from '../actions/counter';

const Counter = ({ id, value, dispatch }) => (
    <div className={'mt-2'}>
        <span>Counter: {value}</span>
        <button className="btn btn-primary ml-2" onClick={() => dispatch(incrementCounter(id))}>+</button>
        <button className="btn btn-primary ml-2" onClick={() => dispatch(decrementCounter(id))}>-</button>
        <button className="btn btn-warning ml-2" onClick={() => dispatch(deteleCounter(id))}>Delete</button>
    </div>
)

export default connect()(Counter);

