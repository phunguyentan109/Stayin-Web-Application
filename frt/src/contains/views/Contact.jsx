import React, {useState, useEffect} from "react";
import Contact from "components/views/Contact";
import {apiCall} from "services/api";
import {connect} from "react-redux";
import withNoti from "hocs/withNoti";

const DEFAULT_MAIL = {
    user_id: [],
    title: "",
    content: "",
}

function ContactContain({api, user, notify, ...props}) {
    const [userList, setUserList] = useState([]);
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
        setConfirm(true);
        const {name, value} = e.target;
        setMail(prev => ({...prev, [name]: value}));
    }

    async function load() {
        try {
            let userData = await apiCall("get", api.user.get());
            userData = userData.map(us => ({...us, select: false}));

            setUserList(userData);
        } catch(err) {
            notify();
        }
    }

    function selectUser(users) {
        return setMail(prev => ({
            ...prev,
            user_id: [...prev.user_id, users]
        }));
    }

    async function hdConfirm() {
        try {
             apiCall("post", api.user.post(user._id), userList);
             await load();
             setConfirm(false);
            return notify("Your contact ware sent successfully!", true);
        } catch(err) {
            return notify(err);
        }
    }

    return <Contact
        {...props}
        confirm={confirm}
        userList={userList}
        mail={mail}
        selectUser={selectUser}
        hd={{
            change: hdChange,
            confirm: hdConfirm
        }}
    />
}

function mapState({user}) {
    return {user: user.data}
}

export default connect(mapState, null)(withNoti(ContactContain));
