import React, {useState} from "react";
import ManageBill from "components/views/ManageBill";
import withAccess from "hocs/withAccess";

function ManageBillContain(props) {
    const [formIsOpen, setOpenForm] = useState(false);

    const toggleForm = () => setOpenForm(prev => !prev);
    
    return <ManageBill 
        {...props}
        toggleForm={toggleForm}
        formIsOpen={formIsOpen}
    />
}

export default withAccess(ManageBillContain);
