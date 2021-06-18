import "./aboutFilm.css";

const AboutFilm = ({ movie })=> {
    return (
        <div>
            <h1>{movie.title}</h1>
        </div>
    );
};

export default AboutFilm;