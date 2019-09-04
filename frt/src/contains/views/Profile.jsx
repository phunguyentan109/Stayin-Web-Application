import React, {useState, useEffect} from "react";
import Profile from "components/views/Profile";
import {apiCall} from "services/api";
import {connect} from "react-redux";
import moment from "moment";

const DEFAULT_PROFILE = {
    viewname: "",
    email: "",
    phone: 0,
    avatar: {
        link: ""
    }
}

const DEFFAULT_PEOPLE = {
    birthDate: moment().format("YYYY-MM-DD"),
    job: ""
}

function ProfileContain({api, user, ...props}) {
    const [people, setPeople] = useState(DEFFAULT_PEOPLE);
    const [profile, setProfile] = useState(DEFAULT_PROFILE);
    const [confirm, setConfirm] = useState(false);

    useEffect(() => {
        let isLoaded = false;
        if(!isLoaded) load();
        return () => {
            isLoaded = true
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const hdProfileChange = (e) => {
        setConfirm(true);
        const {name, value} = e.target;
        setProfile(prev => ({...prev, [name]: value}));
    }

    const hdPeopleChange = (e) => {
        setConfirm(true);
        const {name, value} = e.target;
        setPeople(prev => ({...prev, [name]: value}));
    }

    const hdBirthday = (e) => {
        setConfirm(true);
        const {value} = e.target;
        setPeople(prev => ({
            ...prev,
            birthDate: moment(value).format("YYYY-MM-DD")
        }));
    }

    async function hdConfirm() {
        try {
            await apiCall("put", api.user.update(user._id), profile);
            await apiCall("put", api.people.update(user._id, people._id), people);
            await load();
            setConfirm(false);
        } catch(err) {
            console.log(err);
        }
    }

    async function load() {
        try {
            let profileData = await apiCall("get", api.user.getOne(user._id));
            let peopleData = await apiCall("get", api.people.getOne(user._id, profileData.people_id));
            setProfile({
                ...profileData,
                phone: profileData.phone ? profileData.phone - 0 : 0
            });
            setPeople(prev => ({
                ...prev,
                ...peopleData,
                birthDate: moment(peopleData.birthDate).format("YYYY-MM-DD")
            }));
        } catch(err) {
            console.log(err);
        }
    }

    return <Profile
        {...props}
        profile={profile}
        people={people}
        hdProfileChange={hdProfileChange}
        hdPeopleChange={hdPeopleChange}
        hdBirthday={hdBirthday}
        hdConfirm={hdConfirm}
        confirm={confirm}
    />
}

function mapState({user}) {
    return {user: user.data}
}

export default connect(mapState, null)(ProfileContain);
