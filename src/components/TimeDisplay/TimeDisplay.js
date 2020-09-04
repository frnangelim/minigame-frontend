import React from 'react';
import {Display} from "./style";

function TimeDisplay(props) {

    function renderTime() {
        const zeroPad = (num, places) => String(num).padStart(places, '0');
        let currentMs = zeroPad(props.time.ms, 3);
        let currentSec = zeroPad(props.time.seconds, 2);
        let currentMin = zeroPad(props.time.minutes, 2);
        return `${currentMin}:${currentSec}.${currentMs}`;
    }

    return (
        <Display>{renderTime()}</Display>
    );
}

export default TimeDisplay;
