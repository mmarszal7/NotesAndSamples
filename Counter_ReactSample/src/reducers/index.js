import { combineReducers } from 'redux';
import {
    INCREMENT,
    DECREMENT,
    RESET_COUNTERS,
    ADD_COUNTER,
    DELETE_COUNTER,
} from '../actions'
import { Counter } from '../models/counter'

let maxCounterID = 3;

const initialCountersState = {
    counters: [
        new Counter(0, 0),
        new Counter(1, 0),
        new Counter(2, 0),
        new Counter(3, 0)
    ]
}

const counterReducer = (state = initialCountersState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                counters: state.counters.map(counter =>
                    (counter.id === action.id) ? { ...counter, value: counter.value + 1 } : counter)
            }

        case DECREMENT:
            return {
                ...state,
                counters: state.counters.map(counter =>
                    (counter.id === action.id) ? { ...counter, value: counter.value - 1 } : counter)
            }

        case RESET_COUNTERS:
            return {
                ...state,
                counters: state.counters.map(counter => ({ ...counter, value: 0 }))
            }

        case ADD_COUNTER:
            maxCounterID++;
            return {
                ...state,
                counters: [...state.counters, new Counter(maxCounterID, 0)]
            }

        case DELETE_COUNTER:
            return {
                ...state,
                counters: [...state.counters.filter(c => c.id !== action.id)]
            }

        default:
            return state
    }
}

export default combineReducers({
    counterReducer,
});