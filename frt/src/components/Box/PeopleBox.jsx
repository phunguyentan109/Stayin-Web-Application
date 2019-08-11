import React from "react";

const PeopleBox = (props) => (
    <div className="people-box">
        <div>
            <img src="https://images.unsplash.com/photo-1563729574084-950da51d3822?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&ixlib=rb-1.2.1&q=80&w=100" alt=""/>
            <button><i className="fas fa-minus"></i></button>
        </div>
        <div>
            <p>Chris Brown</p>
            <small>Male</small>
        </div>
    </div>
)

export default PeopleBox;
