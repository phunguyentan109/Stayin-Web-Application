import React from "react";
import Activate from "components/views/Activate";
import withAccess from "hocs/withAccess";

function ActivateContain(props) {

    return <Activate {...props} />
}

export default withAccess(ActivateContain);
