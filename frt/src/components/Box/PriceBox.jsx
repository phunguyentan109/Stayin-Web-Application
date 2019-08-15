import React from "react";

const PriceCheckbox = ({select, type, extra, choose, ...props}) => (
    <div className={`price-box ${select ? "select" : ""}`} onClick={choose}>
        <div>
            <i className="fas fa-tags"></i>
            <div>
                <p>{type}</p>
                <small>Extra - {extra} VND</small>
            </div>
        </div>
        {select || <i className="fas fa-circle-notch"></i>}
        {select && <i className="fas fa-check-circle"></i>}
    </div>
)

export default PriceCheckbox;
