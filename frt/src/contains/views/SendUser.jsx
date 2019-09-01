import React, {useState, useEffect} from "react";
import SendUser from "components/views/SendUser";
import withAccess from "hocs/withAccess";
import {apiCall} from "services/api";
import {connect} from "react-redux";

const DEFAULT_MAIL = {
    user_id: [],
    title: "",
    content: "",
}

function SendUserContain({api, user, ...props}) {
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
        setUserList(prev => ({...prev, [name]: value}));
    }

    async function load() {
        try {
            let userData = await apiCall("get", api.user.get());
            userData = userData.map(us => ({...us, select: false}));

            setUserList(userData);
        } catch(err) {
            console.log(err);
        }
    }

    function hdSelectUser(users) {
        // let choose = [...mail.user_id, user_id];

        setMail(prev => ({
            ...prev,
            user_id: [...prev.user_id, users]
        }));

        // to render component
        // for(let id of userList) {
        //     mail.user_id.indexOf(id)
        //
        // }
    }

    async function hdConfirm() {
        try {
             apiCall("post", api.user.post(user._id), userList);
             await load();
             setConfirm(false);

        } catch(err) {
            console.log(err);
        }
    }

    return <SendUser
        {...props}
        hdChange={hdChange}
        confirm={confirm}
        userList={userList}
        mail={mail}
        hdSelectUser={hdSelectUser}
        hdConfirm={hdConfirm}
    />
}

function mapState({user}) {
    return {user: user.data}
}

export default withAccess(connect(mapState, null)(SendUserContain))
