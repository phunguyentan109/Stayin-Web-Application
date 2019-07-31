import React, {useState} from "react";

export default function withAuth(WrappedComponent) {
    function Authentication(props) {
        const [state, setState] = useState({})

        const hdChange = e => setState({[e.target.name]: e.target.value});

        const hdSubmit = async(e) => {
            e.preventDefault();
            console.log(state);
        }

        return <WrappedComponent
            hdChange={hdChange}
            hdSubmit={hdSubmit}
        />
    }

    return Authentication;
}
