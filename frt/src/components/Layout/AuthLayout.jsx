import React from "react";
import {Link} from "react-router-dom";
import {Grid} from "@material-ui/core";

import "assets/css/components/stayin-style.css";

const AuthLayout = ({bg, bgColor, heading, ...props}) => (
    <div className="authBg" style={{backgroundImage: `url(${bg})`}}>
        <div style={{backgroundColor: `${bgColor}`}}>
            <Grid
                container
                item
                justify="space-between"
                alignItems="center"
                className="authNavbar"
            >
                <Link to="/">Staywell</Link>
                <Link to="/register"><i className="fas fa-user-plus" ></i> Create an account</Link>
            </Grid>
            <div id="content">
                <h1>Welcome to Staywell,</h1>
                <h4>Please enter your account to continue.</h4>
                {/* {error.message && (<div className="alert alert-danger">{error.message}</div>)} */}
                {props.children}
            </div>
            <div className="authCredit">
                <p>©2018, designed and coded with all my <i className="fas fa-heartbeat"></i> and <i className="fas fa-coffee"></i> | Phu Nguyen</p>
            </div>
        </div>
    </div>
);

export default AuthLayout;
