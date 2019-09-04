import React from "react";

const UserCheckbox = ({select, avatar, viewname, email, choose, ...props}) => {
    // const [disable, setDisable] = useState(-1);
    //
    // useEffect(() => {
    //     if(disable === -1) {
    //         setDisable(shouldDisable ? 1 : 0);
    //     }
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [shouldDisable]);

    return (
        <div className={`contact-box ${select ? "select" : ""}`} onClick={choose}>
            <div>
                <img src={avatar.link} alt="" />
                <div>
                    <p>{viewname}</p>
                </div>
            </div>
            {!select && <i className="fas fa-circle-notch"></i>}
            {select && <i className="fas fa-check-circle"></i>}
        </div>
    )
}

export default UserCheckbox;
