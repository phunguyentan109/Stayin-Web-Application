import {ADD_USER} from "../actionTypes";
import {apiAppCall, setTokenHeader} from "../../services/api";
import {addError, removeError} from "./error";
import {addLock, removeLock} from "./lock";

export const setUser = userData => ({type: ADD_USER, userData});

export function setAuthorizationToken(token){
    setTokenHeader(token);
}

export function logOut(){
    return dispatch => {
        localStorage.clear();
        setAuthorizationToken(false);
        dispatch(setUser({}));
        dispatch(removeLock());
    };
}

export function lockScreen(){
    return dispatch => {
        localStorage.removeItem("userToken");
        setAuthorizationToken(false);
        dispatch(setUser({}));
    }
}

export function authUser(userData, route) {
    return dispatch => {
        return new Promise((resolve, reject) => {
            return apiAppCall("post", `/api/auth${route}`, userData)
            .then(({userToken, lockToken, ...user}) => {
                localStorage.setItem("userToken", userToken);
                localStorage.setItem("lockToken", lockToken);
                dispatch(setUser(user));
                dispatch(removeError());
                dispatch(addLock(user));
                resolve();
            })
            .catch(err => {
                dispatch(addError(err));
                reject();
            });
        })
    }
}
