import React from "react";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";

const ConfirmBar = ({confirm, cancel}) => (
    <Card customCss="custom-card">
        <CardBody>
            <div className="confirm-bar">
                <div>
                    <button onClick={confirm}><i className="fas fa-check"></i>Confirm</button>
                    <button onClick={cancel}>Cancel</button>
                </div>
                <p>Enter information and select "Confirm" to complete or "Cancel" to exit</p>
            </div>
        </CardBody>
    </Card>
)

export default ConfirmBar;
