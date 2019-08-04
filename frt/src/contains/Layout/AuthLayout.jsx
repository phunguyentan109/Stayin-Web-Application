import React, {useState, useEffect} from "react";
import AuthLayout from "components/Layout/AuthLayout";
import {connect} from "react-redux";

function AuthLayoutContain({error, ...props}) {
    const [notify, setNotify] = useState(false);

    function showNotification() {
        setNotify(true);
        this.alertTimeout = setTimeout(function() {
            setNotify(false);
        }, 6000);
    }

    useEffect(() => {
        setNotify(error.message ? true : false);
    }, [error]);

    return <AuthLayout
        {...props}
        msg={error.message ? error.message : ""}
        notify={notify}
        showNoti={showNotification}
        closeNoti={setNotify.bind(false)}
    />
}

function mapState({user, error}) {
    return { user, error }
}

export default connect(mapState, null)(AuthLayoutContain);
