import React from "react";
import PropTypes from "prop-types";
import AppLayoutContain from "contains/Layout/AppLayout";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import withStyles from "@material-ui/core/styles/withStyles";
import PriceTable from "components/Table/RoomTable.jsx";


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

const ManagePrice = ({classes, ...props}) => (
    <AppLayoutContain {...props}>
        <GridItem xs={12} sm={12} md={12}>
            <Card>
                <CardHeader color="primary">
                    <h4 className={classes.cardTitleWhite}>Room List</h4>
                    <p className={classes.cardCategoryWhite}>
                        List of room in your apartments
                    </p>
                </CardHeader>
                <CardBody>
                    <PriceTable
                        tableHeaderColor="primary"
                        tableHead={["ID", "Room Name", "People", "Bill Date", "Options"]}
                        tableData={[
                            {
                                room_Name: "Room 101",
                                people_id: {
                                    user_id: [
                                        "", "", ""
                                    ]
                                },
                                bill_date: "29/7/2019"
                            },
                            {
                                room_Name: "Room 202",
                                people_id: {
                                    user_id: [
                                        "", "", "", "", "", "",""
                                    ]
                                },
                                bill_date: "31/7/2019"
                            }
                        ]}
                    />
                </CardBody>
            </Card>
        </GridItem>
    </AppLayoutContain>
);

ManagePrice.propTypes = {
    classes: PropTypes.object
};

export default withStyles(styles)(ManagePrice);
