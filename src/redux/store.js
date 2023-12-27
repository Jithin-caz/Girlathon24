import { legacy_createStore } from "redux";
import reducers from "./indexReducer";

const store=legacy_createStore(reducers,{})
export default store