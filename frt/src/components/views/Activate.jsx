import React from "react";
import AuthLayoutContain from "contains/Layout/AuthLayout.jsx";

const Activate = ({title, message, button, ...props}) => (
    <AuthLayoutContain {...props}>
        <div className="activate">
            <h1>{title}</h1>
            <hr/>
            <h3>{message}</h3>
            <button>Resend email</button>
        </div>
    </AuthLayoutContain>
)

export default Activate;
