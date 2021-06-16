import "./films.css";

const Films = ({ movie }) => {

    return (
        <>
            <section className="container-cards" key={movie.id}>
                <img src={"https://image.tmdb.org/t/p/w1280" + movie.poster_path}></img>
                <label>{movie.vote_average} ⭐</label>
                <h4 className="title">{movie.title}</h4>
            </section>
        </>
    );
};

export default Films;