import React from "react";
import {Link} from "react-router-dom";
import {Grid} from "@material-ui/core";
import AddAlert from "@material-ui/icons/AddAlert";
import Snackbar from "components/Snackbar/Snackbar.jsx";

import "assets/css/components/stayin-style.css";

const AuthLayout = ({bg, bgColor, heading, link, intro, msg, notify, closeNoti, ...props}) => (
    <div className="authBg" style={{backgroundImage: `url(${bg})`}}>
        <div style={{backgroundColor: `${bgColor}`}}>
            <Snackbar
                place="tc"
                color="danger"
                icon={AddAlert}
                message={msg}
                open={notify}
                closeNotification={closeNoti}
                close
            />
            <Grid
                container
                item
                justify="space-between"
                alignItems="center"
                className="authNavbar"
            >
                <Link to="/">Staywell</Link>
                <Link to={link.to}><i className="fas fa-user-plus" ></i> {link.text}</Link>
            </Grid>
            <div id="content">
                <h1>{heading}</h1>
                <h4>{intro}</h4>
                {props.children}
            </div>
            <div className="authCredit">
                <p>©2018, designed and coded with all my <i className="fas fa-heartbeat"></i> and <i className="fas fa-coffee"></i> | Phu Nguyen</p>
            </div>
        </div>
    </div>
);

export default AuthLayout;
