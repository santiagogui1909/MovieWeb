
const urlSearch = "https://api.themoviedb.org/3/search/movie?api_key=8f18f8939b1b8b2b379a9ccf6b0b6e43&query=";
const url = "https://api.themoviedb.org/3/discover/movie?api_key=8f18f8939b1b8b2b379a9ccf6b0b6e43&page=";
const urlRanking = "https://api.themoviedb.org/3/movie/top_rated?api_key=8f18f8939b1b8b2b379a9ccf6b0b6e43";
const urlIdFilm = "https://api.themoviedb.org/3/movie/";
const api_key = "?api_key=8f18f8939b1b8b2b379a9ccf6b0b6e43";

// this function gets the search that the user enters in the input

export function getFilm(search) {
    return new Promise((resolve, reject) => {
        fetch(urlSearch + search)
            .then((res) => {
                resolve(res.json());
            })
            .catch((err) => reject(err));
    })
}

// this function returns an array of objects

export function getAllFilms(page) {
    return new Promise((resolve, reject) => {
        fetch(url + page)
        .then((res) => {
            resolve(res.json());
        })
        .catch((err) => reject(err));
    })
}

// this function returns the movies with the best rating according to the api

export function getRanking() {
    return new Promise((resolve, reject) => {
        fetch(urlRanking)
        .then((res) => {
            resolve(res.json());
        })
        .catch((err) => reject(err));
    })
}

// this funtion get the id

export function getId(id) {
    return new Promise((resolve, reject) => {
        fetch(urlIdFilm + id + api_key )
        .then((res) => {
            resolve(res.json());
        })
        .catch((err) => reject(err));
    })
}
