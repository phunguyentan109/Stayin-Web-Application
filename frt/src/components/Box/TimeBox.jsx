import React from "react";
import moment from "moment";

const TimeBox = ({date, ...props}) => (
    <div className="timeBox">
        <div>
            <i class="far fa-calendar-alt"></i>
            <div>
                <p>Month 1</p>
                <p>End on {moment(date).format("ddd Do, MMM YYYY")}</p>
            </div>
        </div>
        <i class="fas fa-file-invoice-dollar"></i>
    </div>
)

export default TimeBox;
