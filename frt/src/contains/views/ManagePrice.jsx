import React, {useState} from "react";
import ManagePrice from "components/views/ManagePrice";
import withAccess from "hocs/withAccess";

function ManagePriceContain(props) {
    const [formIsOpen, setOpenForm] = useState(false);

    const toggleForm = () => setOpenForm(prev => !prev);
    
    return <ManagePrice 
        {...props}
        toggleForm={toggleForm}
        formIsOpen={formIsOpen}
    />
}

export default withAccess(ManagePriceContain);
