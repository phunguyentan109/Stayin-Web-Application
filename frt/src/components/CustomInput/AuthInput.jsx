import React, {useState} from "react";

export default function AuthInput({icon, type, sendChange, ...props}){
    const [focus, setFocus] = useState(false);
    const toggleFocus = () => setFocus(prev => !prev);
    return (
        <div>
            <i className={`auth-icon ${focus ? "changeAuthBg" : ""}`}></i>
            <input
                type={type ? type : "text"}
                className={`auth-input ${focus ? "changeAuthBg" : ""}`}
                onChange={sendChange}
                onFocus={toggleFocus}
                onBlur={toggleFocus}
                {...props}
            />
        </div>
    );
}
