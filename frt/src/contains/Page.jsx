import React from "react";
import {Switch, Route, withRouter} from "react-router-dom";
import routes from "contents/index";

const Page = () => {
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
        </Switch>
    )
}

export default withRouter(Page);
