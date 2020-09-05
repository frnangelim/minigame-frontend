import React from 'react';
import {Display} from "./style";

import {formatTime} from "../../utils/util";

function TimeDisplay(props) {

    function renderTime() {
        return formatTime(props.time);
    }

    return (
        <Display>{renderTime()}</Display>
    );
}

export default TimeDisplay;
