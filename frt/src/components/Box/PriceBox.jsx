import React from "react";

const PriceCheckbox = ({select, ...props}) => (
    <div className={`price-box ${select ? "select" : ""}`}>
        <i className="fas fa-tags"></i>
        <div>
            <p>PriceA</p>
            <small>Extra - 300 VND</small>
        </div>
        {select && <span><i className="fas fa-check-double"></i></span>}
    </div>
)

export default PriceCheckbox;
