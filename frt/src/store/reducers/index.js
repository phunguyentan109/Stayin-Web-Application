import {combineReducers} from "redux";
import error from "./error";
import user from "./user";
import lock from "./lock";

const rootReducer = combineReducers({error, user, lock});

export default rootReducer;
