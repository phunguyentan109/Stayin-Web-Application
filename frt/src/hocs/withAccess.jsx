import React, {useEffect} from "react";
import {connect} from "react-redux";

export default function withAccess(WrappedComponent) {
    function Access({user, ...props}) {
        const guestPath = ["/login", "/register"];

        useEffect(() => {
            if(user.isAuthenticated) {
                if(!user.active) props.history.push("/activate");
                if(guestPath.indexOf(props.location.pathname) !== -1) props.history.push("/");
            } else {
                if(guestPath.indexOf(props.location.pathname) === -1) props.history.push("/login");
            }
        })

        return <WrappedComponent {...props}/>
    }

    function mapState({user}) {
        return {user}
    }

    return connect(mapState, null)(Access);
}
