import React, {useState} from "react";
import {connect} from "react-redux";
import {authUser} from "store/actions/user";

export default function withAuth(WrappedComponent) {
    function Authentication({api, authUser, user, ...props}) {
        const [state, setState] = useState({});

        const hdChange = e => {
            const {name, value} = e.target;
            setState(prev => ({ ...prev, [name]: value }));
        }

        const hdSubmit = async(e) => {
            e.preventDefault();
            await authUser(api, state);
        }

        return <WrappedComponent
            {...props}
            hdChange={hdChange}
            hdSubmit={hdSubmit}
        />
    }

    return connect(null, {authUser})(Authentication);
}
