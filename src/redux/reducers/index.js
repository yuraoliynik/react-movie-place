import movieReducer from "./movieReducer";
import genreReducer from "./genreReducer";
import settingReducer from "./settingReducer";

import {combineReducers} from "redux";

const reducer = combineReducers({movieReducer, genreReducer, settingReducer});

export default reducer;