import React from 'react';
import {Button} from "reactstrap";
import {ButtonsContainer} from "./style";

function GameActions(props) {

    return (
        <ButtonsContainer>
            {props.playing && <Button onClick={props.guessLower} color={'secondary'}>Menor</Button>}

            {' '}
            <Button style={{width: 200}} onClick={props.playing ? props.win : props.firstGuess}
                    color={'success'}>{props.playing ? 'Igual' : 'Jogar'}</Button>
            {' '}

            {props.playing && <Button onClick={props.guessGreater} color={'secondary'}>Maior</Button>}
        </ButtonsContainer>
    );
}

export default GameActions;
