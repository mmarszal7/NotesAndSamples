export function timerFormatter(durationInSeconds) {
    const seconds = durationInSeconds % 60;
    const minutes = (durationInSeconds - seconds) / 60;
    return pad2(minutes) + ':' + pad2(seconds);
}

function pad2(number) {
    return (number < 10 ? '0' : '') + number
}