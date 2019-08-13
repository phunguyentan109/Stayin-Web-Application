import React from "react";

const PeopleBox = ({link, remove, add, ...props}) => (
    <div className="people-box">
        <div>
            <img src={link} alt=""/>
            {remove && <button className="remove"><i className="fas fa-minus"></i></button>}
            {add && <button className="add"><i className="fas fa-plus"></i></button>}
        </div>
        <div>
            <p>Chris Brown</p>
            <small>Male</small>
        </div>
    </div>
)

export default PeopleBox;
