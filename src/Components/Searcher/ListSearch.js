import "./searcher.css";

const ListSearch = ({searchs}) => {

    return (
        <div className="card-search" key={searchs.id}>
            <img src={"https://image.tmdb.org/t/p/w1280" + searchs.poster_path}></img>
        </div>
    );
};

export default ListSearch;