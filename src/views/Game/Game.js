import React, {useState} from 'react';

import Loader from "react-loader-spinner";
import {useHistory} from "react-router-dom";

import GameResult from "../../components/GameResult/GameResult";
import GuessGame from "../../components/GuessGame/GuessGame";

import api from '../../services/api';
import {formatTime} from "../../utils/util";

function Game() {
    let history = useHistory();
    const [gameResult, setGameResult] = useState({gameNumber: 1, time: {}, gameStatus: {}});
    const [winner, setWinner] = useState(false);
    const [savingScore, setSavingScore] = useState(false);

    function playAgain() {
        setWinner(false);
        setGameResult({...gameResult, gameNumber: gameResult.gameNumber + 1});
    }

    async function endGame(time, gameStatus) {
        setWinner(true);
        setGameResult({...gameResult, time, gameStatus});
        await saveResult(time, gameStatus);
    }

    async function saveResult(time, gameStatus) {
        setSavingScore(true);
        let data = {
            player: history.location.state.nickname,
            attempts: gameStatus.guesses,
            time: formatTime(time),
            gameNumber: gameResult.gameNumber
        };
        await api.post('/score', data);
        setInterval(() => { // For better UX while running locally
            setSavingScore(false);
        }, 1500);
    }

    function renderGame() {
        if (winner)
            return <GameResult result={gameResult} playAgain={playAgain}/>;
        else
            return <GuessGame gameNumber={gameResult.gameNumber} endGame={endGame}/>;
    }

    return (
        <div>
            {savingScore ?
                <>
                    <legend>Salvando resultado</legend>
                    <Loader
                        className="text-center mb-2 mt-2"
                        type="ThreeDots"
                        color="#000"
                        height={64}
                        width={64}
                    />
                </>
                :
                renderGame()
            }
        </div>
    );
}

export default Game;
