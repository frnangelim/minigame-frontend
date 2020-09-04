import React, {useState, useEffect} from 'react';
import TimeDisplay from "../TimeDisplay/TimeDisplay";

function Timer(props) {
    const [time, setTime] = useState({minutes: 0, seconds: 0, ms: 0});

    useEffect(() => {
        let interval = null;
        if (props.active) {
            interval = setInterval(() => {
                setTime({
                    minutes: time.seconds >= 60 ? time.minutes + 1 : time.minutes,
                    seconds: time.seconds >= 60 ? 0 : (time.ms >= 1000 ? time.seconds + 1 : time.seconds),
                    ms: time.ms >= 1000 ? 0 : time.ms + 10
                })
            }, 10);
        } else if (!props.active && time.seconds !== 0) {
            clearInterval(interval);
            props.onFinish(time);
        }
        return () => clearInterval(interval);
    }, [props.active, time]);

    return (
        <TimeDisplay time={time}/>
    );
}

export default Timer;
