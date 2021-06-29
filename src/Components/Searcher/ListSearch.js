import {useHistory} from "react-router-dom";

import "./searcher.css";
import img from '../../images/img-error.svg';

const ListSearch = ({searchs}) => {

    const history = useHistory();
    const getMovieId = () => {
        history.push(`/AboutFilm/${searchs.id}`)
    }
    
    return (
        <div className="card-search" key={searchs.id}>
            <img onClick={getMovieId} src={searchs.poster_path ? "https://image.tmdb.org/t/p/w1280" + searchs.poster_path : img}></img>
        </div> 
    );
};

export default ListSearch;
