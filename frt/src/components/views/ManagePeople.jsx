import React from "react";
import PropTypes from "prop-types";
import AppLayoutContain from "contains/Layout/AppLayout";
import GridItem from "components/Grid/GridItem.jsx";
import PeopleTable from "components/Table/PeopleTable.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import withStyles from "@material-ui/core/styles/withStyles";
import GridContainer from "components/Grid/GridContainer.jsx";

const styles = {
    cardCategoryWhite: {
        "&,& a,& a:hover,& a:focus": {
            color: "rgba(255,255,255,.62)",
            margin: "0",
            fontSize: "14px",
            marginTop: "0",
            marginBottom: "0"
        },
        "& a,& a:hover,& a:focus": {
            color: "#FFFFFF"
        }
    },
    cardTitleWhite: {
        color: "#FFFFFF",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none",
        "& small": {
            color: "#777",
            fontSize: "65%",
            fontWeight: "400",
            lineHeight: "1"
        }
    }
};

const ManagePeople = ({classes, ...props}) => (
    <AppLayoutContain {...props}>
        <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
                <Card>
                    <CardHeader color="primary">
                        <h4 className={classes.cardTitleWhite}>People List</h4>
                        <p className={classes.cardCategoryWhite}>
                            List of all people who are hiring/living in your apartments
                        </p>
                    </CardHeader>
                    <CardBody>
                        <PeopleTable
                            tableHeaderColor="primary"
                            tableHead={["ID", "Name", "Age", "Job", "Email", "Phone Number", "Options"]}
                            tableData={[
                                {
                                    user_id: {
                                        email: "example@example.com",
                                        avatar: {
                                            link: "https://images.unsplash.com/photo-1563729574084-950da51d3822?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&ixlib=rb-1.2.1&q=80&w=100"
                                        },
                                        phone: "2354374676",
                                        viewname: "Nguyen Tran Thien Hieu"
                                    },
                                    age: "20",
                                    job: "Worker",
                                    room_id: {
                                        name: "ABC"
                                    }
                                },
                                {
                                    user_id: {
                                        email: "example@example.com",
                                        avatar: {
                                            link: "https://images.unsplash.com/photo-1563729574084-950da51d3822?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&ixlib=rb-1.2.1&q=80&w=100"
                                        },
                                        phone: "2354374676",
                                        viewname: "Nguyen Tan Phu"
                                    },
                                    age: "22",
                                    job: "Student"
                                }
                            ]}
                        />
                    </CardBody>
                </Card>
            </GridItem>
        </GridContainer>
    </AppLayoutContain>
);

ManagePeople.propTypes = {
    classes: PropTypes.object
};

export default withStyles(styles)(ManagePeople);
