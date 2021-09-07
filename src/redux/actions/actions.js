import {
    INSERT_MOVIES_PAGE,
    INSERT_MOVIE_DETAILS,

    INSERT_GENRES,

    ADD_SELECTED_GENRE,
    DELETE_SELECTED_GENRE,
    CLEAR_SELECTED_GENRES,

    SET_GENRES_URL,
    SET_CURRENT_THEME
} from "./actionTypes";


const actionInsertMoviesPage = (payload) => {
    return {type: INSERT_MOVIES_PAGE, payload};
};

const actionInsertMovieDetails = (payload) => {
    return {type: INSERT_MOVIE_DETAILS, payload};
};


const actionInsertGenres = (payload) => {
    return {type: INSERT_GENRES, payload};
};


const actionAddSelectedGenre = (payload) => {
    return {type: ADD_SELECTED_GENRE, payload};
};

const actionDeleteSelectedGenre = (payload) => {
    return {type: DELETE_SELECTED_GENRE, payload};
};

const actionClearSelectedGenres = () => {
    return {type: CLEAR_SELECTED_GENRES};
};


const actionSetGenres_URL = (payload) => {
    return {type: SET_GENRES_URL, payload};
};

const actionSetCurrentTheme = (payload) => {
    return {type: SET_CURRENT_THEME, payload};
};


export {
    actionInsertMoviesPage,
    actionInsertMovieDetails,

    actionInsertGenres,

    actionAddSelectedGenre,
    actionDeleteSelectedGenre,
    actionClearSelectedGenres,

    actionSetGenres_URL,
    actionSetCurrentTheme
};