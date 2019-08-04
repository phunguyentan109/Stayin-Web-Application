import React from "react";
import AuthLayoutContain from "contains/Layout/AuthLayout.jsx";
import withAuth from "hocs/withAuth";
import AuthInput from "components/CustomInput/AuthInput.jsx";
import {Link} from "react-router-dom";

const Login = ({hdSubmit, hdChange, button, input, ...props}) => (
    <AuthLayoutContain {...props}>
        <form className="authForm" onSubmit={hdSubmit}>
            { input.map((v, i) => ( <AuthInput key={i} {...v} send={hdChange} /> )) }
            <button className={button.cssClass}>{button.text}</button>
        </form>
        <Link to="/reset">Forgot your password?</Link>
    </AuthLayoutContain>
)

export default withAuth(Login);
