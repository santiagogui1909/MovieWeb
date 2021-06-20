import { useEffect, useState, useRef } from 'react';
import Swal from 'sweetalert2'
import ListSearch from "./ListSearch";

import "./searcher.css";
import "../Films/films.css";


const Searcher = () => {

    const [inputMovie, setInputMovie] = useState("");
    const [searchMovies, setSearchMovie] = useState([]);
    const [boxList, setBoxList] = useState(false);
    const myRef = useRef(null);
    const error = "No results found ☹️";
    //search movies
    const searchMovie = async () => {
        const urlSearch = `https://api.themoviedb.org/3/search/movie?api_key=8f18f8939b1b8b2b379a9ccf6b0b6e43&query=${inputMovie}`;
        const responseSearchMovie = await fetch(urlSearch);
        const responseSearch = await responseSearchMovie.json();
        // console.log(responseSearch);
        setSearchMovie(responseSearch.results);
        }

    useEffect(() => {
        if (inputMovie !== "") {
            searchMovie();
        }
    }, [inputMovie]);

    const handleChange = (e) => {
        setInputMovie(e.target.value);
    }

    const search = (e) => {
        e.preventDefault()

        if (!validSearch(inputMovie)) {
            Swal.fire({
                position: 'center',
                icon: 'info',
                title: 'Enter a search, do not use numbers',
                showConfirmButton: false,
                timer: 1800
              })
            setInputMovie("");
            setBoxList(false);
        }else {
            myRef.current.scrollIntoView();
            return setBoxList(true);
        }
    }

    const validSearch = (inputMovie) => {
        const userRegex = /^[A-Z ]+$/i;
        return userRegex.test(inputMovie);
    }

   
    return (
        <>
            <div className="container-search">
                <img src="https://cdn.pixabay.com/photo/2017/11/24/10/43/ticket-2974645_960_720.jpg"></img>
                <header>
                    <h1>films<span>Web</span></h1>
                </header>
                <section className="box-input">
                    <input type="search" name="search" placeholder="search movies,series,tv" onChange={handleChange} value={inputMovie} />
                    <button className="btn-search" onClick={search}><span className="icon-search"></span></button>
                </section>
                <span className="icon-up-open"></span>
            </div>
            <div ref={myRef}>
                <section className={boxList ? "listSearch" : "hide-listSearch"}>
                    <label>results of your search: <span>"{searchMovies.length !== 0 ? inputMovie : error}"</span></label>
                    <div className="list">
                        {searchMovies.map((searchs) => {
                            return <ListSearch searchs={searchs} />
                        })}
                    </div>
                </section>
            </div>
        </>
    );
};

export default Searcher;