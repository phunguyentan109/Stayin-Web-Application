import React, {useState, useEffect} from "react";
import ManagePrice from "components/views/ManagePrice";
import {apiCall} from "services/api";
import {connect} from "react-redux";
import withNoti from "hocs/withNoti";

const DEFAULT_PRICE = {
    type: "",
    electric: "",
    wifi: "",
    water: "",
    house: "",
    extra: "",
    duration: ""
}

function ManagePriceContain({api, user, notify, ...props}) {
    const [prices, setPrices] = useState([]);
    const [price, setPrice] = useState(DEFAULT_PRICE);
    const [formIsOpen, setOpenForm] = useState(false);

    const toggleForm = () => setOpenForm(prev => !prev);

    const hdChange = (e) => {
        const {name, value} = e.target;
        setPrice(prev => ({...prev, [name]: value}));
    }

    async function hdConfirm() {
        try {
            if(price._id){
                await apiCall("put", api.update(user._id, price._id), price);
            } else {
                await apiCall("post", api.create(user._id), price);
            }
            await load();
            setOpenForm(false);
            return notify("A new price is created successfully!", true);
        } catch(err) {
            notify();
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
            let priceList = await apiCall("get", api.get(user._id));
            setPrices(priceList);
            setPrice(DEFAULT_PRICE);
        } catch(err) {
            notify();
        }
    }

    async function hdRemove(price_id) {
        try {
            if(window.confirm("Are you sure to remove this data?")){
                await apiCall("delete", api.delete(user._id, price_id));
                await load();
            }
            return notify("Delete price successfully!", true);
        } catch(err) {
            notify();
        }
    }

    async function hdEdit(price_id) {
        try {
            let priceOne = await apiCall("get", api.getOne(user._id, price_id));
            setPrice(priceOne);
            setOpenForm(true);
        } catch(err) {
            notify();
        }
    }

    return <ManagePrice
        {...props}
        price={price}
        prices={prices}
        setPrices={setPrices}
        toggleForm={toggleForm}
        formIsOpen={formIsOpen}
        hd={{
            confirm: hdConfirm,
            remove: hdRemove,
            change: hdChange,
            edit: hdEdit
        }}
    />
}

function mapState({user}) {
    return {user: user.data}
}

export default connect(mapState, null)(withNoti(ManagePriceContain));
