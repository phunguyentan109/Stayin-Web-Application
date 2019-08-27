import React from "react";
import moment from "moment";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";

const TimeBox = ({date, month, invoice, hasBill, ...props}) => (
    <Card>
        <CardBody>
            <div className="timeBox">
                <div>
                    <i className="far fa-calendar-alt"></i>
                    <div>
                        <p><b>{moment(date).format("dddd Do MMM, YYYY")}</b></p>
                        <p>End of month {month}</p>
                    </div>
                </div>
                {
                    invoice(date) && hasBill && <span id="invoice">
                        <i className="fas fa-check"></i>
                        <span>Done</span>
                    </span>
                }
                {
                    invoice(date) && !hasBill && <span id="invoice">
                        <i className="fas fa-plus"></i>
                        <span>Invoice</span>
                    </span>
                }
                {
                    invoice(date) || <span id="notyet">
                        <span>waiting</span>
                    </span>
                }
            </div>
        </CardBody>
    </Card>
)

export default TimeBox;
