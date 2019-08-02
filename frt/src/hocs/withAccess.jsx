import React from "react";
import {connect} from "react-redux";

export default function withAccess(WrappedComponent) {
    function Access({user, ...props}) {
        const guestPath = ["/login", "/register"];

        if(!user.isAuthenticated && guestPath.indexOf(props.location.pathname) === -1) props.history.push("/login");
        if(user.isAuthenticated && guestPath.indexOf(props.location.pathname) !== -1) props.history.push("/");

        return <WrappedComponent {...props}/>
    }

    function mapState({user}) {
        return {user}
    }

    return connect(mapState, null)(Access);
}
