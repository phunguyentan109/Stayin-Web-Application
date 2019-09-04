import DashboardContain from "contains/views/Dashboard";
import ActivateContain from "contains/views/Activate";
import ActivatedContain from "contains/views/Activated";
import ManagePeopleContain from "contains/views/ManagePeople";
import ManageRoomContain from "contains/views/ManageRoom";
import ManagePriceContain from "contains/views/ManagePrice";
import ManageBillContain from "contains/views/ManageBill";
import ChangePasswordContain from "contains/views/ChangePassword";
import ProfileContain from "contains/views/Profile";
import Contact from "contains/views/Contact";

import Login from "components/views/Login";

import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import Home from "@material-ui/icons/Home";
import AttachMoney from "@material-ui/icons/AttachMoney";

import dashboard from "./display/Dashboard";
import login from "./display/Login";
import register from "./display/Register";
import activate from "./display/Activate";
import activated from "./display/Activated";
import manage_room from "./display/ManageRoom";
import manage_people from "./display/ManagePeople";
import manage_price from "./display/ManagePrice";
import manage_bill from "./display/ManageBill";
import change_password from "./display/ChangePassword";
import profile from "./display/Profile";
import contact_User from "./display/Contact";

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
        path: "/rooms",
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
        path: "/account",
        roles: [],
        name: "Your Account",
        component: ChangePasswordContain,
        display: change_password
    },
    {
        path: "/profile",
        roles: [],
        name: "User Profile Information",
        component: ProfileContain,
        display: profile
    },
    {
        path: "/rooms/:room_id/bills",
        roles: [],
        name: "Manage Bill",
        component: ManageBillContain,
        display: manage_bill
    },
    {
        path: "/contact",
        roles: [],
        name: "Send mail to user",
        component: Contact,
        display: contact_User
    },
    {
        path: "/", to: "/dashboard", redirect: true
    }
]

export {sidebar};

export default [...routes, ...sidebar ];
