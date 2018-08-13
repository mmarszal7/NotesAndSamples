import { ActionTypes } from '../actions/timer';

const initialState = {
    time: 0,
}

export const timerReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.START_TIMER:
            return {
                ...state,
            }

        case ActionTypes.STOP_TIMER:
            return {
                time: 0,
            }

        case ActionTypes.TIMER_TICK:
            return {
                ...state,
                time: action.time
            }

        default:
            return state
    }
}