import React, {useState} from "react";
import ManageRoom from "components/views/ManageRoom";
import withAccess from "hocs/withAccess";

function ManageRoomContain(props) {
    const [formIsOpen, setOpenForm] = useState(false);

    const toggleForm = () => setOpenForm(prev => !prev);

    return <ManageRoom
        {...props}
        toggleForm={toggleForm}
        formIsOpen={formIsOpen}
    />
}

export default withAccess(ManageRoomContain);
