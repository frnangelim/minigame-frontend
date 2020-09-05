export function formatTime(time) {
    const zeroPad = (num, places) => String(num).padStart(places, '0');
    let currentMs = zeroPad(time.ms, 3);
    let currentSec = zeroPad(time.seconds, 2);
    let currentMin = zeroPad(time.minutes, 2);
    return `${currentMin}:${currentSec}.${currentMs}`;
}
