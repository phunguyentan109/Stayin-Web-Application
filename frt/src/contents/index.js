import DashboardContain from "contains/views/Dashboard";
import ActivateContain from "contains/views/Activate";
import ActivatedContain from "contains/views/Activated";
import ManagePeopleContain from "contains/views/ManagePeople";
import ManageRoomContain from "contains/views/ManageRoom";
import ManagePriceContain from "contains/views/ManagePrice";
import ManageBillContain from "contains/views/ManagaBill";

import Login from "components/views/Login";

import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import Home from "@material-ui/icons/Home";
import AttachMoney from "@material-ui/icons/AttachMoney";
import Polymer from "@material-ui/icons/Polymer";

import dashboard from "./display/Dashboard";
import login from "./display/Login";
import register from "./display/Register";
import activate from "./display/Activate";
import activated from "./display/Activated";
import manage_room from "./display/ManageRoom";
import manage_people from "./display/ManagePeople";
import manage_price from "./display/ManagePrice";
import manage_bill from "./display/ManageBill";

const sidebar = [
    {
        path: "/dashboard",
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
        component: ManagePeopleContain,
        icon: Person,
        display: manage_people
    },
    {
        path: "/room",
        roles: [],
        name: "Manage Room",
        component: ManageRoomContain,
        icon: Home,
        display: manage_room
    },
    {
        path: "/price",
        roles: [],
        name: "Manage Price",
        component: ManagePriceContain,
        icon: AttachMoney,
        display: manage_price
    },
    {
        path: "/bill",
        roles: [],
        name: "Manage Bill",
        component: ManageBillContain,
        icon: Polymer,
        display: manage_bill
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
        path: "/activate/:user_id",
        roles: [],
        component: ActivatedContain,
        display: activated
    },
    {
        path: "/activate",
        roles: [],
        component: ActivateContain,
        display: activate
    },
    {
        path: "/", to: "/dashboard", redirect: true
    }
]

export {sidebar};

export default [...routes, ...sidebar ];
