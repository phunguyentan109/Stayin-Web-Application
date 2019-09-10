import React, {useState, useEffect} from "react";
import MyRoom from "components/views/MyRoom";
import {apiCall} from "services/api";
import {connect} from "react-redux";
import withNoti from "hocs/withNoti";

const DEFAULT_ROOM = {
    name: "",
    desc: "",
    price: null,
    people_id: []
}

const DEFAULT_PRICE = {
    electric: "",
    water: "",
    house: "",
    wifi: "",
    extra: "",
    duration: ""
}

const DEFAULT_MAIL = {
    amount: ""
}

function MyRoomContain({api, user, notify, ...props}) {
    const [room, setRoom] = useState(DEFAULT_ROOM);
    const [price, setPrice] = useState(DEFAULT_PRICE);
    const [mail, setMail] = useState(DEFAULT_MAIL);
    const [confirm, setConfirm] = useState(false);

    useEffect(() => {
        let isLoaded = false;
        if(!isLoaded) load();
        return () => {
            isLoaded = true
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);

    const hdChange = (e) => {
        const {name, value} = e.target;
        setMail(prev => ({...prev, [name]: value}));
        setConfirm(true);
    }

    async function load() {
        try {
            let room_id = await apiCall("get", api.user.get(user._id));
            let roomData = await apiCall("get", api.room.get(user._id, room_id));
            let priceData = roomData.price_id;
            setRoom(roomData);
            setPrice(priceData);
            setConfirm(false);
            setMail(DEFAULT_MAIL);
        } catch(err) {
            notify();
        }
    }

    async function hdConfirm() {
        try {
            let {amount} = mail;
            if(mail.amount !=="") {
                await apiCall("post", api.user.post(user._id), {amount});
                await load();

                notify("Submit amount electric to owner successfully!", true);
            } else {
                notify("Please enter amount electric!");
            }
        } catch(err) {
            console.log(err);
            return notify(err);
        }
    }

    return <MyRoom
        {...props}
        confirm={confirm}
        room={room}
        price={price}
        mail={mail}
        hd={{
            confirm: hdConfirm,
            change: hdChange
        }}
    />

}

function mapState({user}) {
    return {user: user.data}
}

export default connect(mapState, null)(withNoti(MyRoomContain));
