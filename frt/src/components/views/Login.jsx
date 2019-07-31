import React from "react";
import AuthLayout from "components/Layout/AuthLayout.jsx";
import withAuth from "hocs/withAuth";

const Login = () => (
    <AuthLayout>
        <h1>Login</h1>
    </AuthLayout>
)

export default withAuth(Login);
