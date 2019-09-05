import React from "react";
import PropTypes from "prop-types";
import AppLayoutContain from "contains/Layout/AppLayout";
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import PriceTable from "components/Table/PriceTable.jsx";
import ConfirmBar from "components/Bar/ConfirmBar";
import CustomCardHeader from "components/Card/CustomCardHeader";
import FormInput from "components/CustomInput/FormInput";
import ASBar from "contains/Bar/ASBar";
import EmptyBox from "components/Box/EmptyBox";
import TableCard from "components/Card/TableCard";
import TitleBox from "components/Box/TitleBox";

import withStyles from "@material-ui/core/styles/withStyles";
import styles from "assets/cardHeaderStyle";

const ManagePrice = ({classes, formIsOpen, toggleForm, hd, form, price, prices, setPrices, table, ...props}) => (
    <AppLayoutContain {...props}>
    {
        formIsOpen && <GridContainer>
             <GridItem xs={12} sm={12} md={12}>
                <TitleBox {...form.box} />
                <ConfirmBar cancel={toggleForm} confirm={hd.confirm}/>
            </GridItem>
            <GridItem xs={12} sm={12} md={12}>
                <Card customCss="custom-card">
                    <CustomCardHeader
                        title="New Price Information"
                        subtitle="Please fill in suitable information for your price"
                    />
                    <CardBody>
                        <GridContainer>
                            <GridItem xs={6} sm={12} md={6}>
                                <FormInput
                                    type="text"
                                    label="Price tags"
                                    placeholder="Enter the price's tags"
                                    required
                                    name="type"
                                    value={price.type}
                                    onChange={hd.change}
                                />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={3}>
                                <FormInput
                                    type="number"
                                    label="Extra money"
                                    placeholder="Extra money per person"
                                    required
                                    name="extra"
                                    value={price.extra}
                                    onChange={hd.change}
                                />
                            </GridItem>
                            <GridItem xs={6} sm={12} md={3}>
                                <FormInput
                                    type="number"
                                    label="Duration"
                                    placeholder="Enter here the month number of contract"
                                    required
                                    name="duration"
                                    value={price.duration}
                                    onChange={hd.change}
                                    disabled={price.room_id && price.room_id.length > 0}
                                />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={3}>
                                <FormInput
                                    type="number"
                                    label="Water/Person"
                                    placeholder="Enter the price of water"
                                    required
                                    name="water"
                                    value={price.water}
                                    onChange={hd.change}
                                />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={3}>
                                <FormInput
                                    type="number"
                                    label="House/Month"
                                    placeholder="Enter the house price"
                                    required
                                    name="house"
                                    value={price.house}
                                    onChange={hd.change}
                                />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={3}>
                                <FormInput
                                    type="number"
                                    label="Electric/KWH"
                                    placeholder="Enter the electric price per kilo"
                                    required
                                    name="electric"
                                    value={price.electric}
                                    onChange={hd.change}
                                    disabled={price.room_id && price.room_id.length > 0}
                                />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={3}>
                                <FormInput
                                    type="number"
                                    label="Wifi/Month"
                                    placeholder="Enter the price of wifi"
                                    required
                                    name="wifi"
                                    value={price.wifi}
                                    onChange={hd.change}
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
                    <ASBar
                        create={toggleForm}
                        keys={["type", "electric", "water", "wifi", "duration", "house", "extra"]}
                        data={prices}
                        setData={setPrices}
                    />
                    {
                        prices.length > 0
                        ? <PriceTable
                            tableHeaderColor="primary"
                            tableHead={table.price.header}
                            tableData={prices}
                            options={{
                                    remove: hd.remove,
                                    edit: hd.edit
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
