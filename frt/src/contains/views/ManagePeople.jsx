import React, {useState, useEffect} from "react";
import ManagePeople from "components/views/ManagePeople";
import withAccess from "hocs/withAccess";
import {connect} from "react-redux";
import {apiCall} from "services/api";

function ManagePeopleContain({api, user, ...props}) {
    const [peopleList, setPeopleList] = useState([]);

    useEffect(() => {
        let isLoad = false;
        if(!isLoad) load();
        return () => isLoad = true;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    async function load() {
        try {
            let people = await apiCall("get", api.get(user._id));
            setPeopleList(people);
        } catch(err) {
            console.log(err);
        }
    }

    async function hdRemove(people_id) {
        try {
            if(window.confirm("Dop you want to remove this data")){
                await apiCall("delete", api.delete(user._id, people_id));
                await load();
            }
        } catch(err) {
            console.log(err);
        }
    }

    return <ManagePeople
        {...props}
        list={peopleList}
        hdRemove={hdRemove}
    />
}

function mapState({user}) {
    return {user: user.data};
}

export default withAccess(connect(mapState, null)(ManagePeopleContain));
