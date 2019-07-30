import {ADD_USER} from "../actionTypes";

const DEFAULT_STATE = {
    isAuthenticated: false,
    data: {}
}

export default (state = DEFAULT_STATE, action) => {
    switch(action.type){
        case ADD_USER:
            return {
                isAuthenticated: !!Object.keys(action.userData).length,
                data: {
                    viewname: action.userData.viewname,
                    profileImg: action.userData.profileImg,
                    id: action.userData.id
                }
            };
        default:
            return state;
    }
}
