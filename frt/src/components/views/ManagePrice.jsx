import React from "react";
import PropTypes from "prop-types";
import AppLayoutContain from "contains/Layout/AppLayout";
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import PriceTable from "components/Table/PriceTable.jsx";
import ConfirmBar from "components/Bar/ConfirmBar";
import CustomCardHeader from "components/Card/CustomCardHeader";
import FormInput from "components/CustomInput/FormInput";
import ASBar from "components/Bar/ASBar";
import EmptyBox from "components/Box/EmptyBox";
import TableCard from "components/Card/TableCard";
import TitleBox from "components/Box/TitleBox";

import withStyles from "@material-ui/core/styles/withStyles";
import styles from "assets/cardHeaderStyle";

const ManagePrice = ({classes, formIsOpen, toggleForm, hdConfirm, form, price, prices, hdChange, hdRemove, hdEdit, table, ...props}) => (
    <AppLayoutContain {...props}>
    {
        formIsOpen && <GridContainer>
             <GridItem xs={12} sm={12} md={12}>
                <TitleBox {...form.box} />
                <ConfirmBar cancel={toggleForm} confirm={hdConfirm}/>
            </GridItem>
            <GridItem xs={12} sm={12} md={12}>
                <Card customCss="custom-card">
                    <CustomCardHeader
                        title="New Price Information"
                        subtitle="Please fill in suitable information for your price"
                    />
                    <CardBody>
                        <GridContainer>
                            <GridItem xs={6} sm={12} md={4}>
                                <FormInput
                                    type="text"
                                    label="Type"
                                    placeholder="Price 001"
                                    required
                                    name="type"
                                    value={price.type}
                                    onChange={hdChange}
                                />
                                <FormInput
                                    type="number"
                                    label="Electric/KWH"
                                    placeholder="3.5"
                                    required
                                    name="electric"
                                    value={price.electric}
                                    onChange={hdChange}
                                />
                                <FormInput
                                    type="number"
                                    label="Wifi/Month"
                                    placeholder="100"
                                    required
                                    name="wifi"
                                    value={price.wifi}
                                    onChange={hdChange}
                                />
                            </GridItem>
                            <GridItem xs={6} sm={12} md={4}>
                            <FormInput
                                    type="number"
                                    label="Water/People"
                                    placeholder="80"
                                    required
                                    name="water"
                                    value={price.water}
                                    onChange={hdChange}
                                />
                                <FormInput
                                    type="number"
                                    label="House/Month"
                                    placeholder="300000"
                                    required
                                    name="house"
                                    value={price.house}
                                    onChange={hdChange}
                                />
                                <FormInput
                                    type="number"
                                    label="Extra money per people"
                                    placeholder="300"
                                    required
                                    name="extra"
                                    value={price.extra}
                                    onChange={hdChange}
                                />
                            </GridItem>
                            <GridItem xs={6} sm={12} md={4}>
                                <FormInput
                                    type="number"
                                    label="Duration"
                                    placeholder="6"
                                    required
                                    name="duration"
                                    value={price.duration}
                                    onChange={hdChange}
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
                <TableCard {...table.price.card}>
                    <ASBar create={toggleForm}/>
                    {
                        prices.length > 0
                        ? <PriceTable
                            tableHeaderColor="primary"
                            tableHead={table.price.header}
                            tableData={prices}
                            options={{
                                    remove: hdRemove,
                                    edit: hdEdit
                                }}
                            />
                        : <EmptyBox message={table.price.empty}/>
                    }
                </TableCard>
            </GridItem>
        </GridContainer>
    }

    </AppLayoutContain>
);

ManagePrice.propTypes = {
    classes: PropTypes.object
};

export default withStyles(styles)(ManagePrice);
