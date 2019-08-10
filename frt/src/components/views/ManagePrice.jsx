import React from "react";
import PropTypes from "prop-types";
import AppLayoutContain from "contains/Layout/AppLayout";
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import withStyles from "@material-ui/core/styles/withStyles";
import PriceTable from "components/Table/PriceTable.jsx";
import ConfirmBar from "components/Bar/ConfirmBar";
import CustomCardHeader from "components/Card/CustomCardHeader";
import FormInput from "components/CustomInput/FormInput";

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
        <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
                <Card plain>
                    <CardHeader plain color="primary">
                        <h4 className={classes.cardTitleWhite}>
                            Create New Price
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
                                <ConfirmBar />
                            </GridItem>
                        </GridContainer>
                    </CardBody>
                </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={5}>
                <Card customCss="custom-card">
                    <CustomCardHeader
                        title="New Price Information"
                        subtitle="Please fill in suitable information for your price"
                    />
                    <CardBody>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={12}>
                                <FormInput
                                    type="text"
                                    label="Type"
                                    placeholder="Price 001"
                                    required
                                />
                                <FormInput
                                    type="number"
                                    label="Electric/KWH"
                                    placeholder="3.5"
                                    required
                                />
                                <FormInput
                                    type="number"
                                    label="Wifi/Month"
                                    placeholder="100"
                                    required
                                />
                                <FormInput
                                    type="number"
                                    label="Water/People"
                                    placeholder="80"
                                    required
                                />
                                <FormInput
                                    type="number"
                                    label="House/Month"
                                    placeholder="300000"
                                    required
                                />
                                <FormInput
                                    type="number"
                                    label="Extra"
                                    placeholder="300"
                                    required
                                />
                                <FormInput
                                    type="number"
                                    label="Duration"
                                    placeholder="6"
                                    required
                                />

                            </GridItem>
                        </GridContainer>
                    </CardBody>
                </Card>
            </GridItem>
        </GridContainer>

        <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
                <Card>
                    <CardHeader color="primary">
                        <h4 className={classes.cardTitleWhite}>Price List</h4>
                        <p className={classes.cardCategoryWhite}>
                            Price of room in your apartments
                        </p>
                    </CardHeader>
                    <CardBody>
                        <PriceTable
                            tableHeaderColor="primary"
                            tableHead={["ID", "Type", "Electric", "Water", "House", "Wifi", "Extra", "Duration", "Options"]}
                            tableData={[
                                ["Price 01", "3.5", "100", "30", "3000", "300", "6"],
                                ["Price 02", "4", "50", "80", "4000", "0", "6"]
                            ]}
                        />
                    </CardBody>
                </Card>
            </GridItem>
        </GridContainer>
    </AppLayoutContain>
);

ManagePrice.propTypes = {
    classes: PropTypes.object
};

export default withStyles(styles)(ManagePrice);
