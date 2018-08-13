import { ActionTypes } from '../actions/timer';

const initialState = {
    time: '00:00',
    isInterval: false,
}

export const timerReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.START_TIMER:
            return {
                ...state,
                workTime: action.workTime,
                intervalTime: action.intervalTime,
                isInterval: false,
            }

        case ActionTypes.STOP_TIMER:
            return {
                ...initialState,
            }

        case ActionTypes.TIMER_TICK:
            return {
                ...state,
                time: action.time,
                isInterval: action.isInterval
            }

        default:
            return state
    }
}