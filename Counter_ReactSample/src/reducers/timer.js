import { ActionTypes } from '../actions/timer';

const initialState = {
    duration: 0,
    workTime: 0,
    intervalTime: 0,
    isInterval: false,
}

export const timerReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.START_TIMER:
            return {
                ...state,
                duration: action.workTime,
                workTime: action.workTime,
                intervalTime: action.intervalTime,
                isInterval: false,
            }

        case ActionTypes.STOP_TIMER:
            return {
                ...initialState,
            }

        case ActionTypes.TIMER_TICK:
            if (state.duration <= 0) {
                const audio = new Audio('beep.mp3');
                audio.play();
            }
            return {
                ...state,
                isInterval: state.duration <= 0 ? !state.isInterval : state.isInterval,
                duration: state.duration <= 0 ? (state.isInterval ? state.workTime : state.intervalTime) : state.duration - 1,
            }

        default:
            return state
    }
}