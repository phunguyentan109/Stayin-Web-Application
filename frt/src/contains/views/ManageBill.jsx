import React, {useState, useEffect} from "react";
import ManageBill from "components/views/ManageBill";
import withAccess from "hocs/withAccess";
import {apiCall} from "services/api";
import {connect} from "react-redux";
import moment from "moment";

const DEFAULT_BILL = {
    electric: {
        amount: 0
    }
}

function ManageBillContain({api, user, ...props}) {
    const [bills, setBills] = useState([]);
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
            setBills(billList.reverse());
            setBill(DEFAULT_BILL);
        } catch(err) {
            console.log(err);
        }
    }

    const toggleForm = () => setOpenForm(prev => !prev);

    const hdChange = (e) => {
        const {value} = e.target;
        setBill(prev => ({
            ...prev,
            electric: { amount: value }
        }));
    }

    async function hdConfirm() {
        const {room_id} = props.match.params;
        const {amount} = bill.electric;
        try {
            if(bill._id){
                await apiCall("put", api.update(user._id, room_id, bill._id), {amount});
            } else {
                await apiCall("post", api.create(user._id, room_id), {amount});
            }
            await load();
            setOpenForm(false);
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

    async function hdChangePay(bill_id) {
        try {
            let {room_id} = props.match.params;

            let billOne = await apiCall("get", api.getOne(user._id, room_id, bill_id));
            let pay = billOne.pay

            await apiCall("put", api.updatePay(user._id, room_id, bill_id), {pay: !pay});

            await load();
        } catch (err) {
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

    function getInvoiceDate(date) {
        let inContractBills = bills.filter(v => v.inContract);
        let dates = inContractBills.map(v => moment(v.pay.time));
        let upcomingDate = moment.min(dates);
        return upcomingDate.isSame(date);
    }

    return <ManageBill
        {...props}
        amount={bill.electric.amount}
        bills={bills}
        setBills={setBills}
        toggleForm={toggleForm}
        formIsOpen={formIsOpen}
        hdConfirm={hdConfirm}
        hdRemove={hdRemove}
        hdChange={hdChange}
        hdEdit={hdEdit}
        hdChangePay={hdChangePay}
        getInvoiceDate={getInvoiceDate}
    />
}

function mapState({user}) {
    return {user: user.data}
}

export default withAccess(connect(mapState, null)(ManageBillContain));
