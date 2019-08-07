import React from "react";
import ManagePeople from "components/views/ManagePeople";
import withAccess from "hocs/withAccess";

function ManagePeopleContain(props) {
    return <ManagePeople {...props}/>
}

export default ManagePeopleContain;
