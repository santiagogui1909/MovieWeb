import { useEffect, useState } from 'react';
import {getRanking} from "../../DataRequest";

import "./ranking.css"

const Ranking = () => {

    const [rankings, setRankings] = useState([]);

    const getRankings = async () => {
        const rankingData = await getRanking();
        setRankings(rankingData.results);
    }

    useEffect(() => {
        getRankings();
    }, []);

    return (
        <>
            <header className="title-table-ranking" id="top-ranking">
                <h3>ranking 🏆</h3>
            </header>
            <div className="table-ranking">
                <table>
                    <tr>
                        <th>film</th>
                        <th>score</th>
                        <th>popularity</th>
                        <th>release date</th>
                    </tr>
                    {rankings.map((ranking) => {
                        var date = new Date(ranking.release_date).toDateString();
                        var dateNow = date.split(" ");
                        return (<tr key={ranking.id}>
                            <td>{ranking.title}</td>
                            <td>{ranking.vote_average} ⭐</td>
                            <td>{ranking.popularity}</td>
                            <td>{`${dateNow[2]} / ${dateNow[1]} / ${dateNow[3]}`}</td>
                        </tr>)
                    })}
                </table>
            </div>
        </>
    );
};

export default Ranking;