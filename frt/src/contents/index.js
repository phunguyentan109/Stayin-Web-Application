import DashboardContain from "contains/views/Dashboard";
import ActivateContain from "contains/views/Activate";

import Login from "components/views/Login";

import Dashboard from "@material-ui/icons/Dashboard";

import dashboard from "./display/Dashboard";
import login from "./display/Login";
import register from "./display/Register";
import activate from "./display/Activate";

const sidebar = [
    {
        path: "/",
        roles: [],
        name: "Dashboard",
        component: DashboardContain,
        icon: Dashboard,
        display: dashboard
    },
    {
        path: "/people",
        roles: [],
        name: "Manage People",
        component: DashboardContain,
        icon: Dashboard,
        display: dashboard
    },
    {
        path: "/account",
        roles: [],
        name: "Manage Account",
        component: DashboardContain,
        icon: Dashboard,
        display: dashboard
    },
    {
        path: "/room",
        roles: [],
        name: "Manage Room",
        component: DashboardContain,
        icon: Dashboard,
        display: dashboard
    },
    {
        path: "/price",
        roles: [],
        name: "Manage Price",
        component: DashboardContain,
        icon: Dashboard,
        display: dashboard
    }
]

const routes = [
    {
        path: "/login",
        roles: [],
        component: Login,
        display: login
    },
    {
        path: "/register",
        roles: [],
        component: Login,
        display: register
    },
    {
        path: "/activate",
        roles: [],
        component: ActivateContain,
        display: activate
    }
]

export {sidebar};

export default [...routes, ...sidebar];
