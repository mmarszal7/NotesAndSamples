import { ActionTypes } from '../actions/counter'
import { Counter } from '../models/counter'

let maxCounterID = 3;

const initialState = {
    counters: [
        new Counter(0, 0),
        new Counter(1, 0),
        new Counter(2, 0),
        new Counter(3, 0)
    ]
}

export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.INCREMENT:
            return {
                ...state,
                counters: state.counters.map(counter =>
                    (counter.id === action.id) ? { ...counter, value: counter.value + 1 } : counter)
            }

        case ActionTypes.DECREMENT:
            return {
                ...state,
                counters: state.counters.map(counter =>
                    (counter.id === action.id) ? { ...counter, value: counter.value - 1 } : counter)
            }

        case ActionTypes.RESET_COUNTERS:
            return {
                ...state,
                counters: state.counters.map(counter => ({ ...counter, value: 0 }))
            }

        case ActionTypes.ADD_COUNTER:
            maxCounterID++;
            return {
                ...state,
                counters: [...state.counters, new Counter(maxCounterID, 0)]
            }

        case ActionTypes.DELETE_COUNTER:
            return {
                ...state,
                counters: [...state.counters.filter(c => c.id !== action.id)]
            }

        default:
            return state
    }
}