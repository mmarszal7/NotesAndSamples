import { timerFormatter } from '../utils/timerFormatter'

export const ActionTypes = {
    START_TIMER: 'START_TIMER',
    STOP_TIMER: 'STOP_TIMER',
    TIMER_TICK: 'TIMER_TICK',
}

let timer = null;
let duration = 0;

let work = 0;
let interval = 0;
let isInterval = false;

const tick = () => {
    if (duration <= 0) {
        isInterval = !isInterval;
        duration = isInterval ? interval : work;
    } else {
        duration = duration - 1;
    }

    return {
        type: ActionTypes.TIMER_TICK,
        time: timerFormatter(duration),
        isInterval
    }
};

export const startTimer = (workTime, intervalTime) => (dispatch) => {
    work = workTime;
    interval = intervalTime;
    duration = workTime;

    timer = setInterval(() => dispatch(tick()), 1000);

    dispatch({
        type: ActionTypes.START_TIMER,
        workTime,
        intervalTime,
    });
}

export const stopTimer = () => {
    clearInterval(timer);

    return {
        type: ActionTypes.STOP_TIMER
    }
}
