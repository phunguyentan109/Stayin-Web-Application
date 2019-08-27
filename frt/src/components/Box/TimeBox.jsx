import React from "react";
import moment from "moment";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";

const TimeBox = ({date, ...props}) => (
    <Card>
        <CardBody>
            <div className="timeBox">
                <div>
                    <i className="far fa-calendar-alt"></i>
                    <div>
                        <p>Month 1</p>
                        <p>Finish on {moment(date).format("Do MMM, YYYY")}</p>
                    </div>
                </div>
                <span>
                    <i className="fas fa-plus"></i>
                    <span>Invoice</span>
                </span>
            </div>
        </CardBody>
    </Card>
)

export default TimeBox;
