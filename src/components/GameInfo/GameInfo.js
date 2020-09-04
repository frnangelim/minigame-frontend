import React from 'react';

function GameInfo(props) {

    return (
        <div>
            <a>Jogo #{props.gameNumber} - </a>
            <a>Tentativa {props.gameStatus.guesses}</a>
        </div>
    );
}

export default GameInfo;
