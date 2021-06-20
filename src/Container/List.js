import { useEffect, useState } from 'react';

import Films from '../Components/Films/Films';
import Pagination from '../Components/Pagination/Pagination';
import "../Components/Films/films.css";

const RenderApi = () => {

    const [movies, setMovies] = useState([]);
    const [count, setCount] = useState(1);

    // paging functions
    const nextPage = () => {
        let pagina = count + 1;
        setCount(pagina);
    }

    const previousPage = () => {
        let pagina = count - 1;

        if (pagina === 0) return null;
        setCount(pagina);
    }

    const getAllMovies = async () => {
        const url = `https://api.themoviedb.org/3/discover/movie?api_key=8f18f8939b1b8b2b379a9ccf6b0b6e43&page=${count}`;
        const response = await fetch(url);
        const responseMovies = await response.json();
        setMovies(responseMovies.results);
    }

    useEffect(() => {
        getAllMovies();
    }, [count]);

    return (
        <fragment id="top">
            <header className="title-films">
                <label>on billboard 🎬</label>
            </header>
            <div className="list">
                {movies.map((movie) => {
                    return <Films movie={movie}/>
                })}
            </div>
            <Pagination
                previousPage={previousPage}
                nextPage={nextPage}
                count={count}
            />
        </fragment>
    );
};

export default RenderApi;