import React from "react";
import ManageBill from "components/views/ManageBill";
import withAccess from "hocs/withAccess";

function ManageBillContain(props) {
    return <ManageBill {...props}/>
}

export default withAccess(ManageBillContain);
