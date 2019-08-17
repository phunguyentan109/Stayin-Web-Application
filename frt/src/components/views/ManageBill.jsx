import React from "react";
import PropTypes from "prop-types";
import AppLayoutContain from "contains/Layout/AppLayout";
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import BillTable from "components/Table/BillTable.jsx";
import ConfirmBar from "components/Bar/ConfirmBar";
import CustomCardHeader from "components/Card/CustomCardHeader";
import FormInput from "components/CustomInput/FormInput";
import ASBar from "components/Bar/ASBar";
import EmptyBox from "components/Box/EmptyBox";
import TableCard from "components/Card/TableCard";
import TitleBox from "components/Box/TitleBox";

import withStyles from "@material-ui/core/styles/withStyles";
import styles from "assets/cardHeaderStyle";

const ManageBill = ({classes, formIsOpen, toggleForm, hdConfirm, form, bill, bills, hdChange, hdRemove, hdEdit, table, ...props}) => (
    <AppLayoutContain {...props}>
        {
            formIsOpen && <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                    <TitleBox {...form.box} />
                    <ConfirmBar cancel={toggleForm} confirm={hdConfirm}/>
                </GridItem>
                <GridItem xs={6} sm={12} md={6}>
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
                                        name="electric"
                                        value={bill.electric.amount}
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
                    <TableCard {...table.bill.card}>
                        <ASBar create={toggleForm}/>
                        {
                            bills.length > 0
                            ? <BillTable
                                tableHeaderColor="primary"
                                tableHead={table.bill.header}
                                tableData={bills}
                                options={{
                                        remove: hdRemove,
                                        edit: hdEdit
                                    }}
                                />
                            : <EmptyBox message={table.bill.empty}/>
                        }
                    </TableCard>
                </GridItem>
            </GridContainer>
        }
    </AppLayoutContain>
);

ManageBill.propTypes = {
    classes: PropTypes.object
};

export default withStyles(styles)(ManageBill);
