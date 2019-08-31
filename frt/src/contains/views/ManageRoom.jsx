import React, {useState, useEffect} from "react";
import ManageRoom from "components/views/ManageRoom";
import withAccess from "hocs/withAccess";
import {apiCall} from "services/api";
import {connect} from "react-redux";
import withNoti from "hocs/withNoti";

const DEFAULT_ROOM = {
    name: "",
    desc: "",
    price_id: null,
    people_id: []
}

function ManageRoomContain({api, user, notify, ...props}) {
    const [rooms, setRooms] = useState([]);
    const [room, setRoom] = useState(DEFAULT_ROOM);
    const [formIsOpen, setOpenForm] = useState(false);
    const [people, setPeople] = useState([]);
    const [price, setPrice] = useState([]);

    useEffect(() => {
        let isLoaded = false;
        if(!isLoaded) load();
        return () => isLoaded = true
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    async function load() {
        try {
            let roomList = await apiCall("get", api.room.get(user._id));
            let priceList = await apiCall("get", api.price.get(user._id));
            priceList = priceList.map(pr => ({...pr, select: false}));
            setRooms(roomList);
            setPrice(priceList);
        } catch(err) {
            notify();
        }
    }

    async function toggleForm() {
        if(!formIsOpen) {
            // If form is about to open => refresh the waiter list
            let peopleList = await apiCall("get", api.people.get(user._id));
            setPeople(peopleList.filter(p => p.room_id === undefined));
        } else {
            // If form is about to close => clear the filled in room data
            setRoom(DEFAULT_ROOM);
        }
        setOpenForm(prev => !prev);
    };

    function hdChange(e) {
        const {name, value} = e.target;
        setRoom(prev => ({...prev, [name]: value}));
    }

    async function hdConfirm() {
        try {
            if(room._id) {
                await apiCall("put", api.room.edit(user._id, room._id), room);
            } else {
                await apiCall("post", api.room.create(user._id), room);
            }
            await toggleForm();
            await load();
            return notify(true, true, "Adding new room successfully!");
        } catch(err) {
            notify();
        }
    }

    async function hdRemove(room_id) {
        try {
            if(window.confirm("Are you sure to remove this data?")){
                await apiCall("delete", api.room.delete(user._id, room_id));
                await load();
                return notify(true, true, "Removing room successfully!");
            }
        } catch(err) {
            notify();
        }
    }

    function hdBill(room_id) {
        props.history.push(`/rooms/${room_id}/bills`);
    }

    async function hdEdit(room_id) {
        try {
            let foundRoom = await apiCall("get", api.room.getOne(user._id, room_id));
            setRoom(foundRoom);
            await toggleForm();
        } catch(err) {
            notify();
        }
    }

    function selectPrice(price_id) {
        return setRoom(prev => ({...prev, price_id}));
    }

    function assignPeople(peo, add=true) {
        if(add){
            let modRoomPeopleId = [...room.people_id, peo];
            let modPeople = people.filter(p => p._id !== peo._id);
            setRoom(prev => ({...prev, people_id: modRoomPeopleId}));
            setPeople(modPeople);
        } else {
            let modPeople = [...people, peo];
            let modRoomPeopleId = room.people_id.filter(p => p._id !== peo._id);
            setRoom(prev => ({...prev, people_id: modRoomPeopleId}));
            setPeople(modPeople);
        }
    }

    return <ManageRoom
        {...props}
        room={room}
        rooms={rooms}
        people={people}
        price={price}
        toggleForm={toggleForm}
        formIsOpen={formIsOpen}
        hd={{
            edit: hdEdit,
            bill: hdBill,
            remove: hdRemove,
            change: hdChange,
            confirm: hdConfirm
        }}
        assignPeople={assignPeople}
        selectPrice={selectPrice}
        setRooms={setRooms}
    />
}

function mapState({user}) {
    return {user: user.data}
}

export default withAccess(connect(mapState, null)(withNoti(ManageRoomContain)));
