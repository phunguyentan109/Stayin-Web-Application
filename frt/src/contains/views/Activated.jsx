import React, {useEffect} from "react";
import Activate from "components/views/Activate";
import {apiCall} from "services/api";

function ActivatedContain(props) {

    useEffect(() => {
        let checkActive = false
        if(!checkActive) verify();
        return () => checkActive = true;
    })

    async function verify() {
        const {user_id} = props.match.params;
        try {
            let user = await apiCall("get", `/api/user/${user_id}`);
            if(user.active) {
                props.history.push("/");
            } else {
                await apiCall("put", `/api/user/${user_id}/activate`);
            }
        } catch(err) {
            console.log(err);
            props.history.push("/");
        }
    }

    return <Activate {...props} />
}

export default ActivatedContain;
