import { combineReducers } from "redux";
import authReducers from "./auth.reducers.js";


const rootReducer = combineReducers({
    auth: authReducers
});

export default rootReducer;