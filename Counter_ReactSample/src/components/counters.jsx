import React from 'react';
import { connect } from 'react-redux';
import Counter from './counter';
import { resetCounters, addCounter } from '../actions/counter';

const Counters = ({ counters, dispatch }) => (
    <div>
        <button onClick={() => dispatch(resetCounters())}>Reset</button>
        {
            counters.map(counter =>
                <Counter
                    key={counter.id}
                    id={counter.id}
                    value={counter.value}
                />
            )
        }
        <button onClick={() => dispatch(addCounter())}>Add new Counter</button>
    </div>
);

const mapStateToProps = state => ({
    counters: state.counter.counters,
});

export default connect(mapStateToProps)(Counters);