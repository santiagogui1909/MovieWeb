import { useEffect, useState, useRef } from 'react';
import Swal from 'sweetalert2'
import ListSearch from "./ListSearch";
import {getFilm} from "../../DataRequest";

import "./searcher.css";
import "../Films/films.css";

const Searcher = ({mock}) => {

    const [inputMovie, setInputMovie] = useState("");
    const [searchMovies, setSearchMovie] = useState([]);
    const [boxList, setBoxList] = useState(false);
    const myRef = useRef(null);
    const error = "No results found ☹️";

    //search movies
    const searchMovie = async () => {
        const resultData = await getFilm(inputMovie);
        setSearchMovie(resultData.results);
    }

    useEffect(() => {
        if (inputMovie !== "") {
            searchMovie();
        }
    }, [inputMovie]);

    //save the value that user enter in the input
    const handleChange = (e) => {
        setInputMovie(e.target.value);
    }

    
//verifies that the value complies with the established parameters

    const search = (e) => {
        e.preventDefault()

        if (!validSearch(inputMovie)) {
            // return mock('Enter a search, do not use numbers');
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
            // mock('search is correct');
            // myRef.currentTarget.scrollIntoView();
            myRef.current.scrollIntoView();
            return setBoxList(true);
        }
    }

//use regex to determine valid characters

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
                    <button className="btn-search" aria-label="btn-search" onClick={search}><span className="icon-search"></span></button>
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