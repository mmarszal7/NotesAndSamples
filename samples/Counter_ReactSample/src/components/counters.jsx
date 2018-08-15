import React from 'react';
import { connect } from 'react-redux';
import Counter from './counter';
import { resetCounters, addCounter } from '../actions/counter';

const Counters = ({ counters, dispatch }) => (
    <div>
        <h1>Counter</h1>
        {
            counters.map(counter =>
                <Counter
                    key={counter.id}
                    id={counter.id}
                    value={counter.value}
                />
            )
        }
        <button className="btn btn-primary mt-2" onClick={() => dispatch(addCounter())}>Add new Counter</button>
        <button className="btn btn-primary mt-2 ml-2" onClick={() => dispatch(resetCounters())}>Reset</button>
    </div>
);

const mapStateToProps = state => ({
    counters: state.counter.counters,
});

export default connect(mapStateToProps)(Counters);