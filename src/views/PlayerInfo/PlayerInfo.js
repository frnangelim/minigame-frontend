import React, {useState} from 'react';

import {GameContainer} from './style.js';
import {
    Input,
    Button,
    Label,
    Form,
    FormGroup,
    Row,
    Col,
} from 'reactstrap';
import {useHistory} from "react-router-dom";

function PlayerInfo(props) {
    let history = useHistory();

    const [inputs, setInputs] = useState({email: '', nickname: ''});
    const [invalidForm, setInvalidForm] = useState(false);

    function onInputChange(event) {
        const {name, value} = event.target;
        setInputs({...inputs, [name]: value});
    }

    function onSubmit(e) {
        e.preventDefault();
        if (isFormValid()) {
            history.push({
                pathname: '/game',
                state: {
                    email: inputs.email,
                    nickname: inputs.nickname
                }
            });
        } else {
            setInvalidForm(true);
        }
    }

    function isFormValid() {
        return validateEmail(inputs.email)
            && inputs.nickname && inputs.nickname.trim().length > 0;
    }

    function validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    return (
        <GameContainer>
            <Form>
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input onChange={onInputChange} value={inputs.email} type="email" name="email" id="email"
                                   placeholder="Digite o seu Email"/>
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="nickname">Apelido</Label>
                            <Input onChange={onInputChange} value={inputs.nickname} type="text" name="nickname"
                                   id="nickname" placeholder="Digite um apelido" required/>
                        </FormGroup>
                    </Col>
                </Row>
                {invalidForm && <p>Preencha todos os campos corretamente.</p>}

                <Button onClick={onSubmit} color={'danger'} style={{marginTop: 10}}>Que comecem os jogos!</Button>
            </Form>
        </GameContainer>
    );
}

export default PlayerInfo;
