import React, {useState, useEffect} from "react";
import AddAlert from "@material-ui/icons/AddAlert";
import Snackbar from "components/Snackbar/Snackbar.jsx";

export default function withNoti(WrappedComponent){
    function Notification({...props}) {
        const [notice, setNotice] = useState({
            open: false,
            message: ""
        });

        useEffect(() => {
            if(notice.open) {
                setTimeout(function() {
                    setNotice(prev => ({...prev, open: false}));
                }, 5000);
            };
        }, [notice.open]);

        function toggleNotice(open=false, message="Oops, there is something wrong with the process. Please try again.") {
            setNotice({open, message});
        }

        return (
            <div>
                <Snackbar
                    place="tc"
                    color="danger"
                    icon={AddAlert}
                    message={notice.message}
                    open={notice.open}
                    closeNotification={toggleNotice.bind(this)}
                    close
                />
                <WrappedComponent
                    {...props}
                    notify={toggleNotice.bind(this, true)}
                />
            </div>
        )
    }

    return Notification;
}
