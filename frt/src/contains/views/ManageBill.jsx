import React, {useState, useEffect} from "react";
import ManageBill from "components/views/ManageBill";
import withAccess from "hocs/withAccess";
import {apiCall} from "services/api";
import {connect} from "react-redux";


function ManageBillContain({api, user, ...props}) {
    const [bills, setBills] = useState([]);
    const [amount, setAmount] = useState(0);
    const [formIsOpen, setOpenForm] = useState(false);
    const [bill, setBill] = useState({
        electric: {
            amount: "",
            cost: ""
        }
    });

    const toggleForm = () => setOpenForm(prev => !prev);

    const hdChange = (e) => {
        const {name, value} = e.target;
        setBill(value);
    }

    async function hdConfirm() {
        const {room_id} = props.match.params;
        try {
            if(bill._id){
                await apiCall("put", api.update(user._id, room_id, bill._id), bill.electric.amount)
            } else {
                await apiCall("post", api.create(user._id, room_id), bill.electric.amount);
            }
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
        try {
            let {room_id} = props.match.params;
            let billOne = await apiCall("get", api.getOne(user._id, room_id, bill_id));
            setBill(billOne);
            setOpenForm(true);
        } catch (err) {
            console.log(err);
        }
    }

    return <ManageBill
        {...props}
        amount={bill}
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
