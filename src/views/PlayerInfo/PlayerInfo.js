import React, {useState} from 'react';

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

function PlayerInfo() {
    let history = useHistory();

    const [inputs, setInputs] = useState({nickname: ''});
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
                    nickname: inputs.nickname
                }
            });
        } else {
            setInvalidForm(true);
        }
    }

    function isFormValid() {
        return inputs.nickname && inputs.nickname.trim().length > 0;
    }

    return (
        <div>
            <Form>
                <Row form>
                    <Col md={3}/>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="nickname">Apelido</Label>
                            <Input onChange={onInputChange} value={inputs.nickname} type="text" name="nickname"
                                   id="nickname" placeholder="Digite um apelido" maxLength={15} required
                                   style={{textAlign: 'center'}}/>
                        </FormGroup>
                    </Col>
                    <Col md={3}/>
                </Row>
                {invalidForm && <p>Preencha o seu apelido.</p>}

                <Button onClick={onSubmit} color={'primary'} style={{marginTop: 10}}>Próximo</Button>
            </Form>
        </div>
    );
}

export default PlayerInfo;
