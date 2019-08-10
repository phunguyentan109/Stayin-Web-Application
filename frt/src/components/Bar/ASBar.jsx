import React from "react";

const ASBar = ({create, ...props}) => (
    <div className="as-bar">
        <div>
            <button onClick={create}><i className="fas fa-plus"></i></button>
            <button><i className="fas fa-trash"></i></button>
            <p><i className="fas fa-table"></i> <span>Showing 10 entries</span></p>
        </div>
        <div>
            <p>Search:</p>
            <div>
                <i className="fas fa-search"></i>
                <input type="text" placeholder="Enter the room name here to search"/>
            </div>
        </div>
    </div>
)

export default ASBar;
