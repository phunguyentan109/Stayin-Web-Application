import React from "react";
import AuthLayout from "components/Layout/AuthLayout.jsx";
import withAuth from "hocs/withAuth";
import AuthInput from "components/CustomInput/AuthInput.jsx";
import {Link} from "react-router-dom";

const Login = ({hdSubmit, hdChange, button, input, ...props}) => (
    <AuthLayout {...props}>
        <form className="authForm" onSubmit={hdSubmit}>
            { input.map((v, i) => ( <AuthInput key={i} {...v} send={hdChange} /> )) }
            <button className={button.cssClass}>{button.text}</button>
        </form>
        <Link to="/reset">Forgot your password?</Link>
    </AuthLayout>
)

export default withAuth(Login);
