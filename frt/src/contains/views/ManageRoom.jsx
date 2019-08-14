import React, {useState, useEffect} from "react";
import ManageRoom from "components/views/ManageRoom";
import withAccess from "hocs/withAccess";
import {apiCall} from "services/api";
import {connect} from "react-redux";

function ManageRoomContain({api, user, ...props}) {
    const [rooms, setRooms] = useState([]);
    const [room, setRoom] = useState({
        name: "",
        desc: "",
        price_id: [],
        people_id: []
    });
    const [formIsOpen, setOpenForm] = useState(false);
    const [people, setPeople] = useState([]);

    const toggleForm = () => setOpenForm(prev => !prev);

    const hdChange = (e) => {
        const {name, value} = e.target;
        setRoom(prev => ({...prev, [name]: value}));
    }

    async function hdConfirm() {
        try {
            await apiCall("post", api.room.create(user._id), room);
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
            let roomList = await apiCall("get", api.room.get(user._id));
            let peopleList = await apiCall("get", api.people.get(user._id));
            setPeople(peopleList.filter(p => p.room_id === undefined));
            setRooms(roomList);
        } catch(err) {
            console.log(err);
        }
    }

    async function hdRemove(room_id) {
        try {
            if(window.confirm("Are you sure to remove this data?")){
                await apiCall("delete", api.delete(user._id, room_id));
                await load();
            }
        } catch(err) {
            console.log(err);
        }
    }

    async function hdEdit(room_id) {

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
        toggleForm={toggleForm}
        formIsOpen={formIsOpen}
        hdConfirm={hdConfirm}
        hdRemove={hdRemove}
        hdChange={hdChange}
        hdEdit={hdEdit}
        assignPeople={assignPeople}
    />
}

function mapState({user}) {
    return {user: user.data}
}

export default withAccess(connect(mapState, null)(ManageRoomContain));
