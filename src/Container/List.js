import { useEffect, useState } from 'react';

import Films from '../Components/Films/Films';
import Pagination from '../Components/Pagination/Pagination';
import "../Components/Films/films.css";
import {getAllFilms} from "../DataRequest";

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
        const resultData = await getAllFilms(count)
        setMovies(resultData.results);
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