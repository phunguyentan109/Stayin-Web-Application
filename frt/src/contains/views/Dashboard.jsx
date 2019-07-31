import React, {Component} from "react";
import Dashboard from "components/views/Dashboard";

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
        return <Dashboard
            classes={classes}
            handleChange={this.handleChange}
            handleChangeIndex={this.handleChangeIndex}
        />
    }
}

export default DashboardContain;
