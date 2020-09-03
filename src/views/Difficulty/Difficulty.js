import React, {useState} from 'react';
import {
    Button,
    Label,
    Input,
    FormGroup
} from 'reactstrap';
import {FormContainer} from './style.js';
import {useHistory} from "react-router-dom";

function Difficulty(props) {
    let history = useHistory();

    const [difficulty, setDifficulty] = useState('easy');

    function onChangeDifficulty(event) {
        const {name} = event.target;
        setDifficulty(name)
    }

    function onBack(e) {
        e.preventDefault();
        history.goBack();
    }

    return (
        <div>
            <FormContainer>
                <div>
                    <Label>Olá, {history.location.state.nickname}</Label>
                </div>

                <FormGroup>
                    <legend>Selecione uma dificuldade</legend>
                    <FormGroup check>
                        <Label check>
                            <Input type="radio" name="easy" onChange={onChangeDifficulty}
                                   checked={difficulty === 'easy'}/>{' '}
                            Fácil
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="radio" name="hard" onChange={onChangeDifficulty}
                                   checked={difficulty === 'hard'}/>{' '}
                            Difícil
                        </Label>
                    </FormGroup>
                </FormGroup>

                <Button onClick={onBack} color={'danger'}>Voltar</Button>{' '}
                <Button color={'primary'}>Próximo</Button>
            </FormContainer>
        </div>
    );
}

export default Difficulty;
