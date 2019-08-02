import React from "react";
import {Switch, Route, withRouter} from "react-router-dom";
import routes from "contents/index";

const Page = ({location, ...props}) => (
    <div>
        <Switch>
            {
                routes.map((route, index) => (
                    <Route path={route.path} key={index} render={ ({match, location}) => (
                        <route.component {...props} {...route.display} match={match} location={location} />
                    )}/>
                ))
            }
        </Switch>
    </div>
)

export default withRouter(Page);
