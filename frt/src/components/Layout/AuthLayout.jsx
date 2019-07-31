import React from "react";
import {Link} from "react-router-dom";
import {Grid} from "@material-ui/core";

import "assets/css/components/stayin-style.css";

const AuthLayout = ({bg, bgColor, ...props}) => (
    <div className="reset authBg" style={{backgroundImage: `url(${bg})`}}>
        <div style={{backgroundColor: `${bgColor}`}}>
            <Grid
                container
                item
                justify="space-between"
                alignItems="center"
                className="authNavbar"
            >
                <Link to="/">Stayin</Link>
                <Link to="/register"><i className="fas fa-user-plus" ></i> Create an account</Link>
            </Grid>
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

export default AuthLayout;
