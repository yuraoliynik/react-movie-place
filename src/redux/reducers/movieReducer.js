import {INSERT_MOVIES_PAGE, INSERT_MOVIE_DETAILS} from "../actions";


const initialState = {
    moviesPage: {},
    movieDetails: {}
}

const movieReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case INSERT_MOVIES_PAGE:
            return {...state, moviesPage: {...payload}};

        case INSERT_MOVIE_DETAILS:
            return {...state, movieDetails: {...payload}};

        default:
            return state;
    }
};


export default movieReducer;