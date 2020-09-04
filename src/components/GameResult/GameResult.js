import React from 'react';
import {
    Button,
} from 'reactstrap';
import {ButtonsContainer} from "./style";
import GameInfo from "../GameInfo/GameInfo";
import TimeDisplay from "../TimeDisplay/TimeDisplay";

function GameResult(props) {

    return (
        <div>
            <legend>Conseguimos!!!</legend>
            <div>
                <legend>O seu número era:</legend>
                <h1>{props.result.gameStatus.currentGuess}</h1>
            </div>

            <legend>O seu resultado foi:</legend>

            <GameInfo gameStatus={props.result.gameStatus} gameNumber={props.result.gameNumber}/>
            <TimeDisplay time={props.result.time}/>

            <ButtonsContainer>
                <Button style={{width: 200}} onClick={props.playAgain} color={'success'}>Jogar novamente</Button>
            </ButtonsContainer>

            <ButtonsContainer>
                <Button color="warning">Finalizar</Button>
            </ButtonsContainer>
        </div>
    );
}

export default GameResult;
