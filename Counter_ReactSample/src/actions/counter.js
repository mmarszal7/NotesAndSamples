export const INCREMENT = 'INCREMENT';

export const ActionTypes = {
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT',
    RESET_COUNTERS: 'RESET_COUNTERS',
    ADD_COUNTER: 'ADD_COUNTER',
    DELETE_COUNTER: 'DELETE_COUNTER',
}

export const incrementCounter = id => ({
    type: ActionTypes.INCREMENT,
    id
})

export const decrementCounter = id => ({
    type: ActionTypes.DECREMENT,
    id
})

export const resetCounters = () => ({
    type: ActionTypes.RESET_COUNTERS,
})

export const addCounter = () => ({
    type: ActionTypes.ADD_COUNTER,
})

export const deteleCounter = (id) => ({
    type: ActionTypes.DELETE_COUNTER,
    id
})
