import React, {useEffect} from "react";
import Activate from "components/views/Activate";
import {apiCall} from "services/api";
import {activateUser} from "store/actions/user";
import {connect} from "react-redux";

function ActivatedContain(props) {

    useEffect(() => {
        let checkActive = false
        if(!checkActive) verify();
        return () => checkActive = true;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    async function verify() {
        const {user_id} = props.match.params;
        try {
            let user = await apiCall("get", `/api/user/${user_id}`);
            console.log(props);
            if(!user.active) {
                let newUser = await apiCall("put", `/api/user/${user_id}/activate`);
                console.log(newUser);
                await props.activateUser(newUser.user._id);
            }
            return props.history.push("/dashboard");
        } catch(err) {
            console.log(err);
            props.history.push("/dashboard");
        }
    }

    return <Activate {...props} />
}

export default connect(null, {activateUser})(ActivatedContain);
