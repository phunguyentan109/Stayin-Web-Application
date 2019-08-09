import React from "react";
import PropTypes from "prop-types";
import AppLayoutContain from "contains/Layout/AppLayout";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import withStyles from "@material-ui/core/styles/withStyles";
import BillTable from "components/Table/BillTable.jsx";


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

const ManageBill = ({classes, ...props}) => (
    <AppLayoutContain {...props}>
        <GridItem xs={12} sm={12} md={12}>
            <Card>
                <CardHeader color="primary">
                    <h4 className={classes.cardTitleWhite}>Bill List</h4>
                    <p className={classes.cardCategoryWhite}>
                        Bill of room in your apartments
                    </p>
                </CardHeader>
                <CardBody>
                    <BillTable
                        tableHeaderColor="primary"
                        tableHead={["ID", "Electric", "Water", "House", "Wifi", "Extra", "Contract Info", "Options"]}
                        tableData={[
                            ["350", "100", "3000", "300", "300", "true"],
                            ["400", "50", "8000", "400", "0", "false"]
                        ]}
                    />
                </CardBody>
            </Card>
        </GridItem>
    </AppLayoutContain>
);

ManageBill.propTypes = {
    classes: PropTypes.object
};

export default withStyles(styles)(ManageBill);
