import React from "react";
import {Switch, Route, withRouter, Redirect} from "react-router-dom";
import routes from "contents/index";

const Page = (props) => {
    return (
        <Switch>
            {
                routes.map((route, index) => {
                    if(route.redirect) {
                        return <Redirect exact from={route.path} to={route.to} key={index}/>
                    }
                    return <Route path={route.path} key={index} render={(props) => (
                        <route.component {...props} {...route.display}/>
                    )}/>
                })
            }
        </Switch>
    )
}

export default withRouter(Page);
