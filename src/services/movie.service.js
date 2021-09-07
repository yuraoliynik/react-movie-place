import myAxios from "./myAxios";

import {
    actionInsertGenres,
    actionInsertMovieDetails,
    actionInsertMoviesPage
} from "../redux/actions";


const loadMoviesPage = (pageId = 1, genresStr = '') => async (dispatch) => {
    const response = await myAxios.get(`/discover/movie?page=${pageId}&with_genres=${genresStr}`);
    dispatch(actionInsertMoviesPage(response.data));
}

const loadMovieDetails = (movieId) => async (dispatch) => {
    const response = await myAxios.get(`/movie/${movieId}`);
    dispatch(actionInsertMovieDetails(response.data));
}

const loadGenres = () => async (dispatch) => {
    const response = await myAxios.get(`/genre/movie/list`);
    dispatch(actionInsertGenres(response.data));
}


export {loadMoviesPage, loadMovieDetails, loadGenres};