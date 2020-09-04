import React, {useState} from 'react';
import {
    Button,
    Label,
    Input,
    FormGroup
} from 'reactstrap';
import {GameContainer} from './style.js';
import {useHistory} from "react-router-dom";

function Home() {
    let history = useHistory();

    function nextPage() {
        history.push('/player');
    }

    return (
        <GameContainer>
            <br/>
            <legend>Vamos brincar!</legend>
            <p>Pense em um número e eu tentarei adivinhar o mais rápido possível,
                se estivermos bastante conectados, podemos entrar para um maravilhoso <a href="/ranking">ranking</a>.</p>
            <p>Será que vamos conseguir?</p>

            <Button onClick={nextPage} color={'primary'}>Começar</Button>
        </GameContainer>
    );
}

export default Home;
