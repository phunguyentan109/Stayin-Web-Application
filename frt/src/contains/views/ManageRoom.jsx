import React from "react";
import ManageRoom from "components/views/ManageRoom";
import withAccess from "hocs/withAccess";

function ManageRoomContain(props) {
    return <ManageRoom {...props}/>
}

export default withAccess(ManageRoomContain);
