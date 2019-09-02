import React from "react";
import {connect} from "react-redux";
import {Switch, Route, withRouter, Redirect} from "react-router-dom";
import routes from "contents/index";
import PageMW from "services/PageMW";

const Page = (props) => {
    return (
        <Switch>
            {
                routes.map((route, index) => {
                    const {path, access, component, display} = route;
                    return <Route
                        path={path}
                        render={
                            ({role, ...props}) => PageMW.routeToAccess(access, component, role, {...props, ...display})
                        }
                        key={index}
                    />
                })
            }
            <Redirect exact from={props.location.pathname} to={'/dashboard'}/>
        </Switch>
    )
}

function mapState({user}) {
    return {
        role: user.data.role ? user.data.role.code : "002"
    }
}

export default connect(mapState)(withRouter(Page));
