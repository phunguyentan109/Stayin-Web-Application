import React, {useState, useEffect} from "react";
import ManageBill from "components/views/ManageBill";
import withAccess from "hocs/withAccess";
import {apiCall} from "services/api";
import {connect} from "react-redux";

function ManageBillContain({api, user, ...props}) {
    const [bills, setBills] = useState([]);
    const [bill, setBill] = useState({
        electric: "",
        wifi: "",
        water: "",
        house: "",
        extra: "",
        inContract: ""
    });
    const [formIsOpen, setOpenForm] = useState(false);

    const toggleForm = () => setOpenForm(prev => !prev);

    const hdChange = (e) => {
        const {name, value} = e.target;
        setBill(prev => ({...prev, [name]: value}));
    }

    async function hdConfirm() {
        const {room_id} = this.props.match.params;
        try {
            await apiCall("post", api.create(user._id), room_id);
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
        try {
            let billList = await apiCall("get", api.get(user._id));
            console.log(billList);
            setBills(billList);
        } catch(err) {
            console.log(err);
        }
    }
    
    async function hdRemove(bill_id) {
        try {
            if(window.confirm("Are you sure to remove this data?")){
                await apiCall("delete", api.delete(user._id, bill_id));
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
        bill={bill}
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
