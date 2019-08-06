import React, {useEffect} from "react";
import {connect} from "react-redux";

export default function withAccess(WrappedComponent) {
    function Access({user, ...props}) {
        const guestPath = ["/login", "/register"];

        useEffect(() => {
            const {history} = props;
            const {pathname} = props.location;
            if(user.isAuthenticated) {
                if(!user.data.active) return history.push("/activate");
                if(guestPath.indexOf(pathname) !== -1 || pathname === "/activate") return history.push("/");
            } else {
                if(guestPath.indexOf(pathname) === -1) return history.push("/login");
            }
        });

        return <WrappedComponent {...props}/>
    }

    return connect(({user}) => ({user}), null)(Access);
}
