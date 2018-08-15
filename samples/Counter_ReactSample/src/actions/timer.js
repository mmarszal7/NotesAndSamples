export const ActionTypes = {
    START_TIMER: 'START_TIMER',
    STOP_TIMER: 'STOP_TIMER',
    TIMER_TICK: 'TIMER_TICK',
}

let timer = null;

const tick = () => {
    return {
        type: ActionTypes.TIMER_TICK,
    }
}

export const startTimer = (workTime, intervalTime) => (dispatch) => {
    clearInterval(timer);
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
