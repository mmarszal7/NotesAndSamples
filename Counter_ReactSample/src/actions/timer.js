import * as moment from 'moment';

export const ActionTypes = {
    START_TIMER: 'START_TIMER',
    STOP_TIMER: 'STOP_TIMER',
    TIMER_TICK: 'TIMER_TICK',
}

let timer = null;
let duration = 0;

const tick = () => {
    duration = moment.duration(duration.asSeconds() - 1, 'seconds');
    if (moment.duration(duration).seconds() <= 0) {
        clearInterval(timer)
    }
    return {
        type: ActionTypes.TIMER_TICK,
        time: moment.duration(duration).seconds()
    }
};

export const startTimer = (seconds, intervalTime) => (dispatch) => {
    clearInterval(timer);

    const diffTime = moment().add(seconds, 'seconds').unix() - moment().unix();
    duration = moment.duration(diffTime, 'seconds');

    timer = setInterval(() => dispatch(tick()), 1000);

    dispatch({
        type: ActionTypes.START_TIMER
    });
}

export const stopTimer = () => {
    clearInterval(timer);
    return {
        type: ActionTypes.STOP_TIMER
    }
}
