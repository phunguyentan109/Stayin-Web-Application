import {ADD_USER} from "../actionTypes";
import {apiAppCall, setTokenHeader} from "services/api";
import {addError, removeError} from "./error";

export const setUser = user => ({type: ADD_USER, user});

export function setAuthorizationToken(token){
    setTokenHeader(token);
}

export function logOut(){
    return dispatch => {
        localStorage.clear();
        setAuthorizationToken(false);
        dispatch(setUser({}));
    };
}

export function authUser(route, data) {
    return async(dispatch) => {
        try {
            let rs = await apiAppCall("post", `/api/user/${route}`, data);
            const {token, ...user} = rs;
            localStorage.setItem("token", token);
            setAuthorizationToken(token);
            dispatch(setUser(user));
            dispatch(removeError());
        } catch(err) {
            dispatch(addError(err));
        }
    }
}
