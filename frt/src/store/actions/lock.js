import {ADD_LOCK, REMOVE_LOCK} from "../actionTypes";

export const addLock = lockData => ({type: ADD_LOCK, lockData});
export const removeLock = () => ({type: REMOVE_LOCK});

export function clearLock(){
    return dispatch => {
        dispatch(removeLock());
    }
}
