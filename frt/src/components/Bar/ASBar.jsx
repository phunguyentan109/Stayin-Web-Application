import React from "react";

const ASBar = (props) => (
    <div className="as-bar">
        <button>Add new room</button>
        <div>
            <i className="fas fa-search"></i>
            <input type="text" placeholder="Enter the room name here to search"/>
        </div>
    </div>
)

export default ASBar;
