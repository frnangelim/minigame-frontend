import React, {useState} from 'react';
import {
    Button,
    Label,
    Input,
    FormGroup
} from 'reactstrap';
import {GameContainer} from './style.js';
import {useHistory} from "react-router-dom";
import Timer from "../../components/Timer/Timer";
import GameResult from "../../components/GameResult/GameResult";
import GuessGame from "../../components/GuessGame/GuessGame";

function Game() {
    let history = useHistory();
    const [gameResult, setGameResult] = useState({gameNumber: 1});
    const [winner, setWinner] = useState(false);

    function onBack(e) {
        e.preventDefault();
        history.goBack();
    }

    function nextPage() {
        history.push({
            pathname: '/play',
            state: {
                email: history.location.state.email,
                nickname: history.location.state.nickname
            }
        });
    }

    function playAgain() {
        setWinner(false);
        setGameResult({...gameResult, gameNumber: gameResult.gameNumber + 1});
    }

    function endGame(time, gameStatus) {
        setWinner(true);
        setGameResult({...gameResult, time, gameStatus});
    }

    return (
        <GameContainer>
            {winner ?
                <GameResult result={gameResult} playAgain={playAgain}/>
                :
                <GuessGame gameNumber={gameResult.gameNumber} endGame={endGame}/>
            }
        </GameContainer>
    );
}

export default Game;
