import { fetchWithTimeout } from './services';
const movies = require('./data/movies.json');
export function fetchMovies() {
    const resloveFunction = () => movies;
    return fetchWithTimeout(1000).then(resloveFunction);
}

const moviePromise = fetchMovies();
moviePromise.then(results => {
    console.log(results);
})