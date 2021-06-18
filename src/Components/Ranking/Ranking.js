import { useEffect, useState } from 'react';

import "./ranking.css"

const Ranking = () => {

    const [rankings, setRankings] = useState([]);

    const getRankings = async () => {
        const urlRanking = `https://api.themoviedb.org/3/movie/top_rated?api_key=8f18f8939b1b8b2b379a9ccf6b0b6e43`;
        const response = await fetch(urlRanking);
        const responseRanking = await response.json();
        setRankings(responseRanking.results);
    }

    useEffect(() => {
        getRankings();
    }, []);

    return (
        <>
            <header className="title-table-ranking">
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
                        return (<tr key={ranking.id}>
                            <td>{ranking.title}</td>
                            <td>{ranking.vote_average} ⭐</td>
                            <td>{ranking.popularity}</td>
                            <td>{ranking.release_date.split('-').reverse().join('/')}</td>
                        </tr>)
                    })}
                </table>
            </div>
        </>
    );
};

export default Ranking;