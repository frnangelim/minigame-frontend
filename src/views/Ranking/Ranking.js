import React, {useState, useEffect} from 'react';

import {GameContainer} from './../../style.js';
import {Icon} from "./style";

import {
    Table,
    Button,
} from 'reactstrap';
import {useHistory} from "react-router-dom";
import Loader from 'react-loader-spinner';

import api from '../../services/api';

import Star from '../../assets/star.png'

function Ranking(props) {
    let history = useHistory();
    const [loading, setLoading] = useState(true);
    const [scores, setScores] = useState([]);

    useEffect(() => {
        loadRanking();
    }, []);

    async function loadRanking() {
        const {data} = await api.get(`/score?page=1&pageSize=10`);

        // Fill empty ranking
        let scores = data.rows;
        for (let i = scores.length; i < 10; i++) {
            scores.push({player: '-', attempts: '-', time: '-'})
        }

        setScores(scores);
        setLoading(false);
    }

    function goToPlayerInfo() {
        history.push('/player');
    }

    return (
        <GameContainer>
            {loading ?
                <Loader
                    className="text-center mb-2 mt-2"
                    type="ThreeDots"
                    color="#000"
                    height={64}
                    width={64}
                />
                :
                <>
                    <Icon src={Star}/>
                    <h1>RANKING</h1>

                    <br/>

                    <Table borderless>
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Apelido</th>
                            <th>Tentativas</th>
                            <th>Tempo</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            scores.map((score, index) => {
                                return (
                                    <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{score.player}</td>
                                        <td>{score.attempts}</td>
                                        <td>{score.time}</td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </Table>
                    <br/>
                    <Button onClick={goToPlayerInfo} color={'primary'}>Voltar para o início</Button>
                </>
            }
            <br/>

        </GameContainer>
    );
}

export default Ranking;
