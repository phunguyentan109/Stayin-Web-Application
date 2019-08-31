import React, {useState, useEffect} from "react";
import ManageBill from "components/views/ManageBill";
import withAccess from "hocs/withAccess";
import {apiCall} from "services/api";
import {connect} from "react-redux";
import withNoti from "hocs/withNoti";

const DEFAULT_BILL = {
    electric: {
        amount: 0
    }
}

function ManageBillContain({api, user, notify, ...props}) {
    const [invoices, setInvoices] = useState([]);
    const [timeline, setTimeline] = useState([]);
    const [bill, setBill] = useState(DEFAULT_BILL);
    const [formIsOpen, setOpenForm] = useState(false);

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
            billList.reverse();
            setInvoices(billList.filter(v => v.electric.amount !== 0));
            setTimeline(billList.filter(v => v.electric.amount === 0)
                .reverse()
                .map((v, i) => ({
                    _id: v._id,
                    date: v.pay.time,
                    invoice: hdEdit.bind(this, v._id),
                    month: i+1
                })
            ))
        } catch(err) {
            notify();
        }
    }

    const toggleForm = () => {
        setOpenForm(prev => !prev);
        setBill(DEFAULT_BILL);
    };

    const hdChange = (e) => {
        const {value} = e.target;
        setBill(prev => ({
            ...prev,
            electric: { amount: value }
        }));
    }

    async function hdConfirm(id, status) {
        try {
            const {room_id} = props.match.params;
            const {amount} = bill.electric;
            if(bill._id){
                await apiCall("put", api.update(user._id, room_id, bill._id), {amount})
            } else {
                await apiCall("post", api.create(user._id, room_id), {amount});
            }
            await load();
            toggleForm();
        } catch(err) {
            console.log(err);
        }
    }

    async function hdPay(bill_id, status) {
        try {
            const {room_id} = props.match.params;
            await apiCall("put", api.update(user._id, room_id, bill_id), {status});
            await load();
            return notify("Payment status has been changed successfully!", true);
        } catch(err) {
            notify("The status can't be updated because the contract has expired or connection error.");
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
            setOpenForm(true);
            setBill(billOne);
        } catch (err) {
            console.log(err);
        }
    }

    async function hdReset(bill_id) {
        try {
            if(window.confirm("Are you sure to reset this bill's information? (The reset bill date will once again appear in the timeline)")) {
                const {room_id} = props.match.params;
                await apiCall("put", api.update(user._id, room_id, bill_id), {reset: true})
                await load();
                return notify("Reset bill successfully!", true);
            }
        } catch(err) {
            notify();
        }
    }

    return <ManageBill
        {...props}
        amount={bill.electric.amount}
        invoices={invoices}
        setInvoices={setInvoices}
        timeline={timeline}
        bill={bill}
        toggleForm={toggleForm}
        openForm={formIsOpen}
        hd={{
            confirm: hdConfirm,
            remove: hdRemove,
            change: hdChange,
            edit: hdEdit,
            pay: hdPay,
            reset: hdReset
        }}
    />
}

function mapState({user}) {
    return {user: user.data}
}

export default withAccess(connect(mapState, null)(withNoti(ManageBillContain)));
