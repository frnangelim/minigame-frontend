import React from 'react';

import {
    Button,
} from 'reactstrap';

import {useHistory} from "react-router-dom";

function Home() {
    let history = useHistory();

    function nextPage() {
        history.push('/player');
    }

    return (
        <div>
            <br/>
            <legend>Vamos brincar!</legend>
            <p>Pense em um número de 1 a 1000 e eu tentarei adivinhar o mais rápido possível,
                se estivermos bastante conectados, podemos entrar para um maravilhoso <a href="/ranking">ranking</a>.
            </p>
            <p>Será que vamos conseguir?</p>

            <br/>

            <Button onClick={nextPage} color={'primary'}>Próximo</Button>
        </div>
    );
}

export default Home;
