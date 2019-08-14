import React from "react";

const PeopleBox = ({link, remove, add, job, name, use, ...props}) => (
    <div className="people-box">
        <div>
            <img src={link} alt=""/>
            {remove && <button className="remove" onClick={remove.bind(this, use, false)}><i className="fas fa-minus"></i></button>}
            {add && <button className="add" onClick={add.bind(this, use)}><i className="fas fa-plus"></i></button>}
        </div>
        <div>
            <p>{name}</p>
            <small>{job ? job : "Unknown"}</small>
        </div>
    </div>
)

export default PeopleBox;
