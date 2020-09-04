import React, {useState, useEffect} from 'react';

import Timer from "../Timer/Timer";
import GameInfo from "../GameInfo/GameInfo";
import GameActions from "../GameActions/GameActions";

const MIN_RANGE_DEFAULT = 1;
const MAX_RANGE_DEFAULT = 1000;

function GuessGame(props) {
    const [time, setTime] = useState({minutes: 0, seconds: 0, ms: 0});
    const [gameStatus, setGameStatus] = useState({currentGuess: 0, guesses: 1, playing: false})
    const [binaryFloor, setBinaryFloor] = useState(MIN_RANGE_DEFAULT);
    const [binaryCeil, setBinaryCeil] = useState(MAX_RANGE_DEFAULT);

    useEffect(() => {
        let interval = null;
        if (gameStatus.playing) {
            interval = setInterval(() => {
                setTime({
                    minutes: time.seconds >= 60 ? time.minutes + 1 : time.minutes,
                    seconds: time.seconds >= 60 ? 0 : (time.ms >= 1000 ? time.seconds + 1 : time.seconds),
                    ms: time.ms >= 1000 ? 0 : time.ms + 10
                })
            }, 10);
        } else if (!gameStatus.playing && time.seconds !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [gameStatus.playing, time]);

    function firstGuess() {
        let value = randomNumber(MIN_RANGE_DEFAULT, MAX_RANGE_DEFAULT);
        setTime({minutes: 0, seconds: 0, ms: 0});
        setGameStatus({...gameStatus, currentGuess: value, playing: true, guesses: 1});
    }

    function guessGreater() {
        let MAX_RANGE = binaryCeil;
        let MIN_RANGE = gameStatus.currentGuess;
        let value = Math.ceil((MAX_RANGE + MIN_RANGE) / 2);
        setBinaryFloor(MIN_RANGE);
        setGameStatus({...gameStatus, currentGuess: value, guesses: gameStatus.guesses + 1});
        if (MAX_RANGE === MIN_RANGE)
            win();
    }

    function guessLower() {
        let MAX_RANGE = gameStatus.currentGuess;
        let MIN_RANGE = binaryFloor;
        let value = Math.ceil((MAX_RANGE + MIN_RANGE) / 2);
        setBinaryCeil(MAX_RANGE);
        setGameStatus({...gameStatus, currentGuess: value, guesses: gameStatus.guesses + 1});
        if (MAX_RANGE === MIN_RANGE)
            win();
    }

    function win(timerInfo) {
        setGameStatus({...gameStatus, playing: false});
        setTime(timerInfo);
        props.endGame(time, gameStatus);
    }

    function randomNumber(minRange, maxRange) {
        return Math.floor(Math.random() * (maxRange - minRange)) + minRange;
    }

    return (
        <div>
            <GameInfo gameStatus={gameStatus} gameNumber={props.gameNumber}/>
            <Timer active={gameStatus.playing} onFinish={win}/>

            <div>
                <legend>O seu número é:</legend>
                <h1>{gameStatus.playing ? gameStatus.currentGuess : 'X'}</h1>
            </div>

            <GameActions playing={gameStatus.playing} firstGuess={firstGuess} guessLower={guessLower} guessGreater={guessGreater} win={win}/>
        </div>
    );
}

export default GuessGame;
