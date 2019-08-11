import React from "react";
import PropTypes from "prop-types";
import AppLayoutContain from "contains/Layout/AppLayout";
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import withStyles from "@material-ui/core/styles/withStyles";
import BillTable from "components/Table/BillTable.jsx";
import ConfirmBar from "components/Bar/ConfirmBar";
import CustomCardHeader from "components/Card/CustomCardHeader";
import FormInput from "components/CustomInput/FormInput";
import ASBar from "components/Bar/ASBar";

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

const ManageBill = ({classes, formIsOpen, toggleForm, ...props}) => (
    <AppLayoutContain {...props}>
        {
            formIsOpen && <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                    <Card plain>
                        <CardHeader plain color="primary">
                            <h4 className={classes.cardTitleWhite}>
                                Create New Bill
                            </h4>
                            <p className={classes.cardCategoryWhite}>
                                Here is a subtitle for this table
                            </p>
                        </CardHeader>
                    </Card>
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                    <Card customCss="custom-card">
                        <CardBody>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={12}>
                                    <ConfirmBar
                                        cancel={toggleForm}
                                    />
                                </GridItem>
                            </GridContainer>
                        </CardBody>
                    </Card>
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                    <Card customCss="custom-card">
                        <CustomCardHeader
                            title="New Bill Information"
                            subtitle="Please fill in suitable information for your bill"
                        />
                        <CardBody>
                            <GridContainer>
                                <GridItem xs={6} sm={12} md={6}>
                                    <FormInput
                                        type="number"
                                        label="Electric/KWH"
                                        placeholder="85"
                                        required
                                    />
                                    <FormInput
                                        type="number"
                                        label="Wifi/Month"
                                        placeholder="100"
                                        required
                                        disabled
                                    />
                                    <FormInput
                                        type="number"
                                        label="Number People are using water"
                                        placeholder="2"
                                        required
                                    />
                                </GridItem>
                                <GridItem xs={6} sm={12} md={6}>
                                    <FormInput
                                        type="number"
                                        label="House/Month"
                                        placeholder="300000"
                                        required
                                        disabled
                                    />
                                    <FormInput
                                        type="number"
                                        label="Extra"
                                        placeholder="300"
                                        required
                                    />
                                </GridItem>
                            </GridContainer>
                        </CardBody>
                    </Card>
                </GridItem>
            </GridContainer>
        }

        {
            formIsOpen || <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                    <Card>
                        <CardHeader color="primary">
                            <h4 className={classes.cardTitleWhite}>Bill List</h4>
                            <p className={classes.cardCategoryWhite}>
                                Bill of room in your apartments
                            </p>
                        </CardHeader>
                        <CardBody>
                            <ASBar create={toggleForm}/>
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
            </GridContainer>
        }
    </AppLayoutContain>
);

ManageBill.propTypes = {
    classes: PropTypes.object
};

export default withStyles(styles)(ManageBill);
