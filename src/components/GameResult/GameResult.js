import React from 'react';
import {
    Button,
} from 'reactstrap';
import {ButtonsContainer} from "./style";
import GameInfo from "../GameInfo/GameInfo";
import TimeDisplay from "../TimeDisplay/TimeDisplay";
import {useHistory} from "react-router-dom";

function GameResult(props) {
    let history = useHistory();

    function goToRanking() {
        history.push('/ranking');
    }

    return (
        <div>
            <legend>Conseguimos!!!</legend>
            <div>
                <legend>O seu número era:</legend>
                <h1 style={{color: 'green'}}>{props.result.gameStatus.currentGuess}</h1>
            </div>

            <legend>O seu resultado foi:</legend>

            <GameInfo gameStatus={props.result.gameStatus} gameNumber={props.result.gameNumber}/>
            <TimeDisplay time={props.result.time}/>

            <ButtonsContainer>
                <Button style={{width: 200}} onClick={props.playAgain} color={'success'}>Jogar novamente</Button>
            </ButtonsContainer>

            <ButtonsContainer>
                <Button style={{width: 150}} onClick={goToRanking} color="danger">Finalizar</Button>
            </ButtonsContainer>
        </div>
    );
}

export default GameResult;
