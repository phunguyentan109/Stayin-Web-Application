import React, {useState, useEffect} from "react";
import ChangePassword from "components/views/ChangePassword";
import withAccess from "hocs/withAccess";
import {apiCall} from "services/api";
import {connect} from "react-redux";

const DEFAULT_PASSWORD = {
    password: "",
    newPassword: "",
    confirmPassword: ""
}

function ChangePasswordContain({api, user, ...props}) {
    const [users, setUsers] = useState(DEFAULT_PASSWORD);
    const [confirm, setConfirm] = useState(false);

    const hdChange = (e) => {
        setConfirm(true);
        const {name, value} = e.target;
        setUsers(prev => ({...prev, [name]: value}));
    }

    useEffect(() => {
        let isLoaded = false;
        if(!isLoaded) load();
        return () => {
            isLoaded = true
        };
    }, []);

    async function load() {
        try {
            setUsers(DEFAULT_PASSWORD);
        } catch(err) {
            console.log(err);
        }
    }

    async function hdConfirm() {
        try {
            let {newPassword, confirmPassword} = users;

            if(newPassword === confirmPassword){
                await apiCall("put", api.updatePassword(user._id), users);
                await load();
            } else {
                alert("Password not the same or old password is valid !");
            }
            return props.history.push("/profile");
        } catch(err) {
            console.log(err);
        }
    }

    return <ChangePassword
        {...props}
        users={users}
        hdConfirm={hdConfirm}
        hdChange={hdChange}
        confirm={confirm}
    />
}

function mapState({user}) {
    return {user: user.data}
}

export default withAccess(connect(mapState, null)(ChangePasswordContain));
