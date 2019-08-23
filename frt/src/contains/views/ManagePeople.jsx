import React, {useState, useEffect} from "react";
import ManagePeople from "components/views/ManagePeople";
import withAccess from "hocs/withAccess";
import {connect} from "react-redux";
import {apiCall} from "services/api";

function ManagePeopleContain({api, user, ...props}) {
    const [peopleList, setPeopleList] = useState([]);
    const [userList, setUserList] = useState([]);

    useEffect(() => {
        let isLoad = false;
        if(!isLoad) load();
        return () => isLoad = true;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    async function load() {
        try {
            let people = await apiCall("get", api.people.get(user._id));
            let users = await apiCall("get", api.account.get());
            setUserList(users);
            setPeopleList(people);
        } catch(err) {
            console.log(err);
        }
    }

    async function hdRemove(people_id) {
        try {
            if(window.confirm("Do you want to remove this data?")){
                await apiCall("delete", api.people.delete(user._id, people_id));
                await load();
            }
        } catch(err) {
            console.log(err);
        }
    }

    async function removeUser(user_id) {
        try {
            if(window.confirm("Do you want to remove this data?")){
                await apiCall("delete", api.account.delete(user_id));
                await load();
            }
        } catch(err) {
            console.log(err);
        }
    }

    return <ManagePeople
        {...props}
        list={peopleList}
        userList={userList}
        hdRemove={hdRemove}
        rmUser={removeUser}
        setPeople={setPeopleList}
        peopleList={peopleList}
    />
}

function mapState({user}) {
    return {user: user.data};
}

export default withAccess(connect(mapState, null)(ManagePeopleContain));
