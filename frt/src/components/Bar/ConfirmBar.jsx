import React from "react";

const ConfirmBar = ({confirm, cancel}) => (
    <div className="confirm-bar">
        <div>
            <button><i className="fas fa-check" onClick={confirm}></i>Confirm</button>
            <button onClick={cancel}>Cancel</button>
        </div>
        <p>Enter information and select "Confirm" to complete or "Cancel" to exit</p>
    </div>
)

export default ConfirmBar;
