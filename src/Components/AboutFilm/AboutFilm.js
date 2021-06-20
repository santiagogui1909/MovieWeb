import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import img from '../../images/img-error.svg';
import "./aboutFilm.css";

const AboutFilm = () => {
    const params = useParams();
    const [aboutFilm, setAboutFilm] = useState([]);

    useEffect(async () => {
        const urlAbout = await fetch(` https://api.themoviedb.org/3/movie/${params.id}?api_key=8f18f8939b1b8b2b379a9ccf6b0b6e43&`);
        const response = await urlAbout.json();
        setAboutFilm(response);
    }, [])


    return (
        <div className="container-aboutfilms">
            <img className="backdropPath" src={aboutFilm.poster_path ? "https://image.tmdb.org/t/p/w1280" + aboutFilm.backdrop_path: img}></img>
            <div className="container-info-films">
                <section className="poster">
                    <img src={aboutFilm.poster_path ? "https://image.tmdb.org/t/p/w1280" + aboutFilm.poster_path : img}></img>
                </section>
                <section className="box-info">
                    <header>
                        <h2>{aboutFilm.title}</h2>
                    </header>
                    <p>{aboutFilm.overview}</p>
                </section>
            </div>
            <div class="clr"></div>
            <section className="content-more-info">
                <label><span className="icon-videocam-outline"></span>release date:  {aboutFilm.release_date}</label>
                <label><span className="icon-videocam-outline"></span>original language:  {aboutFilm.original_language}</label>
                <label><span className="icon-videocam-outline"></span>assessment:  {aboutFilm.vote_average}<span className="icon-star-filled"></span></label>
            </section>
        </div>
    )
};

export default AboutFilm;