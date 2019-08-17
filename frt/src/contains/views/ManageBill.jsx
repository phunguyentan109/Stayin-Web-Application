import React, {useState, useEffect} from "react";
import ManageBill from "components/views/ManageBill";
import withAccess from "hocs/withAccess";
import {apiCall} from "services/api";
import {connect} from "react-redux";

function ManageBillContain({api, user, ...props}) {
    const [bills, setBills] = useState([]);
    const [amount, setAmount] = useState(0);
    const [formIsOpen, setOpenForm] = useState(false);

    const toggleForm = () => setOpenForm(prev => !prev);

    const hdChange = (e) => {
        const {name, value} = e.target;
        setAmount(value);
    }

    async function hdConfirm() {
        const {room_id} = props.match.params;
        try {
            await apiCall("post", api.create(user._id, room_id), {amount});
            await load();
            setOpenForm(false);
        } catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        let isLoaded = false;
        if(!isLoaded) load();
        return () => {
            isLoaded = true
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    async function load() {
        const {room_id} = props.match.params;
        try {
            let billList = await apiCall("get", api.get(user._id, room_id));
            setBills(billList);
        } catch(err) {
            console.log(err);
        }
    }

    async function hdRemove(bill_id) {
        const {room_id} = props.match.params;
        try {
            if(window.confirm("Are you sure to remove this data?")){
                await apiCall("delete", api.delete(user._id, room_id, bill_id));
                await load();
            }
        } catch(err) {
            console.log(err);
        }
    }

    async function hdEdit(bill_id) {

    }

    return <ManageBill
        {...props}
        amount={amount}
        bills={bills}
        toggleForm={toggleForm}
        formIsOpen={formIsOpen}
        hdConfirm={hdConfirm}
        hdRemove={hdRemove}
        hdChange={hdChange}
        hdEdit={hdEdit}
    />
}

function mapState({user}) {
    return {user: user.data}
}

export default withAccess(connect(mapState, null)(ManageBillContain));
