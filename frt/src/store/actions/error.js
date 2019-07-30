import {ADD_ERROR, REMOVE_ERROR} from "../actionTypes";

export const addError = errorMsg => ({type: ADD_ERROR, errorMsg});

export const removeError = errorMsg => ({type: REMOVE_ERROR, errorMsg});
