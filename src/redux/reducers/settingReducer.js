import {
    ADD_SELECTED_GENRE,
    DELETE_SELECTED_GENRE,
    CLEAR_SELECTED_GENRES,

    SET_GENRES_URL,
    SET_CURRENT_THEME
} from "../actions";

import myStorage from "../../localStorage/myStorage";


const initialState = {
    selectedGenres: myStorage.getProp('selectedGenres') || [],
    genres_URL: '',
    currentTheme: myStorage.getProp('currentTheme') || 'light'
}

const settingReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ADD_SELECTED_GENRE:
            myStorage.setProp(
                'selectedGenres',
                [...state.selectedGenres, payload]
            );
            return {
                ...state,
                selectedGenres: [...state.selectedGenres, payload]
            };

        case DELETE_SELECTED_GENRE:
            myStorage.setProp(
                'selectedGenres',
                [...state.selectedGenres.filter(item => item !== payload)]
            );
            return {
                ...state,
                selectedGenres: state.selectedGenres.filter(item => item !== payload)
            };

        case CLEAR_SELECTED_GENRES:
            myStorage.setProp(
                'selectedGenres',
                []
            );
            return {
                ...state,
                selectedGenres: []
            };

        case SET_GENRES_URL:
            return {...state, genres_URL: payload};

        case SET_CURRENT_THEME:
            return {...state, currentTheme: payload};

        default:
            return state;
    }
};


export default settingReducer;