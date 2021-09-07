import {INSERT_GENRES} from "../actions";

const initialState = {
    genres: []
}

const genreReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case INSERT_GENRES:
            return {...state, genres: [...payload.genres]};

        default:
            return state;
    }
};


export default genreReducer;