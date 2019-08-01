import React, {useState} from "react";

export default function withAuth(WrappedComponent) {
    function Authentication(props) {
        const [state, setState] = useState({})

        const hdChange = e => {
            const {name, value} = e.target;
            setState(prev => ({ ...prev, [name]: value }));
        }

        const hdSubmit = async(e) => {
            e.preventDefault();
            console.log(state);
        }

        return <WrappedComponent
            {...props}
            hdChange={hdChange}
            hdSubmit={hdSubmit}
        />
    }

    return Authentication;
}
