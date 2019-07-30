import React from "react";
import {Switch, Route, Redirect, withRouter} from "react-router-dom";
import routes from "contents/index";

const Page = ({location, ...props}) => (
    <div>
        <Switch>
            {
                routes.map((route, index) => {
                    if (route.redirect) {
                        return <Redirect exact from={route.path} to={route.pathTo} key={index} />
                    } else {
                        return <Route path={route.path} key={index} render={ ({match}) => (
                            <route.component {...props} {...route.display} match={match} />
                        )}/>
                    }
                })
            }
            <Redirect exact from={location.pathname} to={"/home"} />
        </Switch>
    </div>
)

export default withRouter(Page);
