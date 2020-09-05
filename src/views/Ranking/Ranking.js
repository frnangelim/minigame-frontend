import React, {useState, useEffect} from 'react';

import {
    Table,
    Button,
} from 'reactstrap';
import {useHistory} from "react-router-dom";
import Loader from 'react-loader-spinner';

import api from '../../services/api';

const RANK_ITEMS = 10;

function Ranking() {
    let history = useHistory();
    const [loading, setLoading] = useState(true);
    const [scores, setScores] = useState([]);

    useEffect(() => {
        loadRanking();
    }, []);

    async function loadRanking() {
        const {data} = await api.get(`/score?page=1&pageSize=${RANK_ITEMS}`);

        // Fill empty ranking
        let scores = data.rows;
        for (let i = scores.length; i < RANK_ITEMS; i++) {
            scores.push({player: '-', attempts: '-', time: '-'})
        }

        setScores(scores);
        setLoading(false);
    }

    function goToPlayerInfo() {
        history.push('/player');
    }

    function renderRows() {
        let rows = [];
        scores.map((score, index) => {
            rows.push(
                <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{score.player}</td>
                    <td>{score.attempts}</td>
                    <td>{score.time}</td>
                </tr>
            )
        });
        return rows;
    }

    return (
        <div>
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
                    <h1>RANKING</h1>

                    <br/>

                    <Table borderless responsive>
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Apelido</th>
                            <th>Tentativas</th>
                            <th>Tempo</th>
                        </tr>
                        </thead>
                        <tbody>
                        {renderRows()}
                        </tbody>
                    </Table>
                    <br/>

                    <Button onClick={goToPlayerInfo} color={'primary'}>Voltar para o início</Button>
                </>
            }
            <br/>

        </div>
    );
}

export default Ranking;
