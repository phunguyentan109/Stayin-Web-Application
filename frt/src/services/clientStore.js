import {setUser} from "../store/actions/user";
import {setTokenHeader} from "./api";
import jwtDecode from "jwt-decode";

export function checkStore(store){
    if(localStorage.token){
        setTokenHeader(localStorage.token);
        try{
            store.dispatch(setUser(jwtDecode(localStorage.token)));
        }catch(err){
            //if the token is tampered, change authenticate to false
            store.dispatch(setUser({}));
        }
    }
}
