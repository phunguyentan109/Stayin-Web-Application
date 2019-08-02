import React from "react";
import {Switch, Route, withRouter} from "react-router-dom";
import routes from "contents/index";

const Page = ({location, ...props}) => (
    <div>
        <Switch>
            {
                routes.map((route, index) => (
                    <Route path={route.path} key={index} render={ (propsB) => (
                        <route.component {...propsB} {...route.display}/>
                    )}/>
                ))
            }
        </Switch>
    </div>
)

export default withRouter(Page);
