import React from "react";
import {Switch, Route, withRouter, Redirect} from "react-router-dom";
import routes from "contents/index";

const Page = (props) => {
    return (
        <Switch>
            {
                routes.map((route, index) => {
                    if(route.path === "/") {
                        return <Route path={route.path} exact key={index} render={(props) => (
                            <route.component {...props} {...route.display}/>
                        )}/>
                    }
                    return <Route path={route.path} key={index} render={(props) => (
                        <route.component {...props} {...route.display}/>
                    )}/>
                })
            }
            <Redirect path={props.location.pathname} to="/"/>
        </Switch>
    )
}

export default withRouter(Page);
