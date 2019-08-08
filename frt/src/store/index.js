import rootReducer from "./reducers";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";

export function configureStore(){
    const store = createStore(rootReducer, applyMiddleware(thunk));
    return store;
}
