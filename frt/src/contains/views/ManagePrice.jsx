import React, {useState, useEffect} from "react";
import ManagePrice from "components/views/ManagePrice";
import withAccess from "hocs/withAccess";
import {apiCall} from "services/api";
import {connect} from "react-redux";

const DEFAULT_PRICE = {
    type: "",
    electric: "",
    wifi: "",
    water: "",
    house: "",
    extra: "",
    duration: ""
}

function ManagePriceContain({api, user, ...props}) {
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
            let priceList = await apiCall("get", api.get(user._id));
            setPrices(priceList);
            setPrice(DEFAULT_PRICE);
        } catch(err) {
            console.log(err);
        }
    }

    async function hdRemove(price_id) {
        try {
            if(window.confirm("Are you sure to remove this data?")){
                await apiCall("delete", api.delete(user._id, price_id));
                await load();
            }
        } catch(err) {
            console.log(err);
        }
    }

    async function hdEdit(price_id) {
        try {
            let priceOne = await apiCall("get", api.getOne(user._id, price_id));
            setPrice(priceOne);
            setOpenForm(true);
        } catch(err) {
            console.log(err);
        }
    }

    return <ManagePrice
        {...props}
        price={price}
        prices={prices}
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

export default withAccess(connect(mapState, null)(ManagePriceContain));
