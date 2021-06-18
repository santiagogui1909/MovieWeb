import "./searcher.css";

import img from '../../images/img-error.svg';


const ListSearch = ({searchs}) => {

    return (
        <div className="card-search" key={searchs.id}>
            <img src={searchs.poster_path ? "https://image.tmdb.org/t/p/w1280" + searchs.poster_path : img}></img>
        </div> 
    );
};

export default ListSearch;
