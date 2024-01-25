import { combineReducers } from "redux";
import { loggedinReducer, TeamRegisteredReducer } from "./reducer";

const reducers=combineReducers({
    logIn:loggedinReducer,
    teamRegistered:TeamRegisteredReducer,
});

export default reducers;