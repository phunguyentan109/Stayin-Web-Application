import React from "react";
import {Redirect} from "react-router-dom";

export default class PageMW {

    routeToAccess(rtype = [], routeComponent, uRole = "002", props) {
        const {pathname} = props.location;

        const routeType = {
            guestAccess: () => this.guestAccess(routeComponent, pathname, uRole),
            peopleAccess: () => this.peopleAccess(routeComponent, pathname, uRole),
            ownerAccess: () => this.ownerAccess(routeComponent, pathname, uRole)
        }
        let ret = null;
        for(let i = 0; i < rtype.length; i++) {
            ret = routeType[rtype[i]]();
            if(!ret.status) break;
        }
        let {component} = ret;
        return ret.status ? <component {...props} /> : component;
    }

    getAccessReturn(status, component) {
        return {status, component}
    }

    guestAccess(component, pathname, role) {
        return role === "002"
        ? this.getAccessReturn(true, component)
        : <Redirect from={pathname} to="/login"/>
    }

    peopleAccess(component, pathname, role) {
        return role === "001"
        ? this.getAccessReturn(true, component)
        : <Redirect from={pathname} to="/dashboard"/>
    }

    ownerAccess(component, pathname, role) {
        return role === "000"
        ? this.getAccessReturn(true, component)
        : <Redirect from={pathname} to="/dashboard"/>
    }

}
