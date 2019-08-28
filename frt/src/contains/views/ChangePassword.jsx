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
    const [formIsOpen, setOpenForm] = useState(false);

    const toggleForm = () => setOpenForm(prev => !prev);

    const hdChange = (e) => {
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
            setOpenForm(true);
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
            return props.history.push("/dashboard");
        } catch(err) {
            console.log(err);
        }
    }

    function hdCancel() {
        return props.history.push("/dashboard");
    }

    return <ChangePassword
        {...props}
        users={users}
        toggleForm={toggleForm}
        formIsOpen={formIsOpen}
        hdConfirm={hdConfirm}
        hdChange={hdChange}
        hdCancel={hdCancel}
    />
}

function mapState({user}) {
    return {user: user.data}
}

export default withAccess(connect(mapState, null)(ChangePasswordContain));
