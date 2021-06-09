
import "./searcher.css";

const Searcher = () => {
    return (
        <div className="container-search">
            <img src="https://cdn.pixabay.com/photo/2017/11/24/10/43/ticket-2974645_960_720.jpg"></img>
                <header>
                    <h1>movie<span>Web</span></h1>
                </header>
            <input type="search" name="search" placeholder="search movies" />
        </div >
    );
};

export default Searcher;