import React from "react";
// import "../../css/Auth/AuthPage.css";
// import AuthNavbar from "./AuthNavbar";
// import AuthCrebar from "./AuthCrebar";
// import AuthContent from "./AuthContent";
// import {Link} from "react-router-dom";

const AuthLayout = ({layout, navbar, ...props}) => {
    const {bg, color} = layout;
    return (
        <div className="reset authBg" style={{backgroundImage: `url(${bg})`}}>
            <div style={{backgroundColor: `${color}`}}>
                {/* <AuthNavbar {...navbar}/> */}
                <div className="container stayin-container">
                    <div>
                        {/* <h1>{heading}</h1>
                        {error.message && (<div className="alert alert-danger">{error.message}</div>)}
                        <AuthForm {...form} sendChange={sendChange} sendSubmit={sendSubmit}/>
                        <Link to={footer.url} className="stayin-link">{footer.text}</Link> */}
                        {props.children}
                    </div>
                </div>
                {/* <AuthCrebar /> */}
            </div>
        </div>
    );
}

export default AuthLayout;
