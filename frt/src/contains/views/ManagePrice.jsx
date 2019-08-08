import React from "react";
import ManagePrice from "components/views/ManagePrice";
import withAccess from "hocs/withAccess";

function ManagePriceContain(props) {
    return <ManagePrice {...props}/>
}

export default ManagePriceContain;
