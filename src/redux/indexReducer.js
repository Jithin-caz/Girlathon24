import { combineReducers } from "redux";
import { loggedinReducer } from "./reducer";

const reducers=combineReducers({
    logIn:loggedinReducer,
});

export default reducers;