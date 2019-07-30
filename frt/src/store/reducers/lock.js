import {ADD_LOCK, REMOVE_LOCK} from "../actionTypes";

const DEFAULT_STATE = {
    viewname: null,
    email: null,
    profileImg: null
}

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case ADD_LOCK:
            return {...state, ...action.lockData};
        case REMOVE_LOCK:
            return DEFAULT_STATE;
        default:
            return state;
    }
}
