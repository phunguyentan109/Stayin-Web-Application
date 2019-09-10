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
import MyRoom from "contains/views/MyRoom";

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
import my_Room from "./display/MyRoom";

const sidebar = [
    {
        path: "/dashboard",
        access: ["ownerAccess", "peopleAccess"],
        name: "Dashboard",
        Component: DashboardContain,
        icon: Dashboard,
        display: dashboard
    },
    {
        path: "/people",
        access: ["ownerAccess"],
        name: "Manage People",
        Component: ManagePeopleContain,
        icon: Person,
        display: manage_people
    },
    {
        path: "/rooms",
        access: ["ownerAccess"],
        name: "Manage Room",
        Component: ManageRoomContain,
        icon: Home,
        display: manage_room
    },
    {
        path: "/price",
        access: ["ownerAccess"],
        name: "Manage Price",
        Component: ManagePriceContain,
        icon: AttachMoney,
        display: manage_price
    }
]

const routes = [
    {
        path: "/login",
        access: ["guestAccess"],
        Component: Login,
        display: login
    },
    {
        path: "/register",
        access: ["guestAccess"],
        Component: Login,
        display: register
    },
    {
        path: "/activate/:user_id",
        access: ["guestAccess"],
        Component: ActivatedContain,
        display: activated
    },
    {
        path: "/activate",
        access: ["guestAccess"],
        Component: ActivateContain,
        display: activate
    },
    {
        path: "/account",
        access: ["ownerAccess", "peopleAccess"],
        name: "Your Account",
        Component: ChangePasswordContain,
        display: change_password
    },
    {
        path: "/profile",
        access: ["ownerAccess", "peopleAccess"],
        name: "User Profile Information",
        Component: ProfileContain,
        display: profile
    },
    {
        path: "/rooms/:room_id/bills",
        access: ["ownerAccess"],
        name: "Manage Bill",
        Component: ManageBillContain,
        display: manage_bill
    },
    {
        path: "/contact",
        access: ["ownerAccess"],
        name: "Send mail to user",
        Component: Contact,
        display: contact_User
    },
    {
        path: "/myroom",
        access: ["peopleAccess"],
        name: "Room detail",
        Component: MyRoom,
        display: my_Room
    }
]

export {sidebar};

export default [...routes, ...sidebar ];
