export const INCREMENT = 'INCREMENT';

export const incrementCounter = id => ({
    type: 'INCREMENT',
    id
})

export const DECREMENT = 'DECREMENT';

export const decrementCounter = id => ({
    type: 'DECREMENT',
    id
})

export const RESET_COUNTERS = 'RESET_COUNTERS';

export const resetCounters = () => ({
    type: 'RESET_COUNTERS',
})

export const ADD_COUNTER = 'ADD_COUNTER';

export const addCounter = () => ({
    type: 'ADD_COUNTER',
})

export const DELETE_COUNTER = 'DELETE_COUNTER';

export const deteleCounter = (id) => ({
    type: 'DELETE_COUNTER',
    id
})
