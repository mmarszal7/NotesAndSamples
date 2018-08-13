import React from 'react';
import { connect } from 'react-redux';
import { startTimer, stopTimer } from '../actions/timer';

const Timer = ({ time, dispatch }) => (
    <div>
        Timer
        <label>{time}</label>
        <input type="text" ref={(input) => this.secondsInput = input} defaultValue={0} />
        <input type="text" ref={(input) => this.intervalInput = input} defaultValue={0} />
        <button className="btn btn-primary ml-2" onClick={() => dispatch(startTimer(this.secondsInput.value, this.intervalInput.value))}>Start</button>
        <button className="btn btn-primary ml-2" onClick={() => dispatch(stopTimer())}>Stop</button>

    </div>
)

const mapStateToProps = state => ({
    time: state.timer.time,
});

export default connect(mapStateToProps)(Timer);
