// import { useEffect, useState } from 'react';
import {useHistory} from "react-router-dom";

import "./films.css";

const Films = ({ movie }) => {
    const history = useHistory();

    const getMovieId = () => {
        history.push(`/AboutFilm/${movie.id}`)
    }


    return (
        <>
            <section className="container-cards" key={movie.id}>
                <img onClick={getMovieId} src={"https://image.tmdb.org/t/p/w1280" + movie.poster_path}></img>
                <label>{movie.vote_average} ⭐</label>
                <h4 className="title">{movie.title}</h4>
            </section>
        </>
    );
};

export default Films;