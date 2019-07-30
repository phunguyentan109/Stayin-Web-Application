import React, {Component} from "react";
import Dashboard from "components/views/Dashboard";
import AppLayout from "contains/Layout/AppLayout";

class DashboardContain extends Component {
    state = {
        value: 0
    };

    handleChange = (e, value) => {
        this.setState({value})
    }

    handleChangeIndex = index => {
      this.setState({ value: index });
    };

    render() {
        const {classes} = this.props;
        return (
            <AppLayout {...this.props}>
                <Dashboard
                    classes={classes}
                    handleChange={this.handleChange}
                    handleChangeIndex={this.handleChangeIndex}
                />
            </AppLayout>
        )
    }
}

export default DashboardContain;
