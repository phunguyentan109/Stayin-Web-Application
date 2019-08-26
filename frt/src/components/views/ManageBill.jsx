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
import ASBar from "contains/Bar/ASBar";
import EmptyBox from "components/Box/EmptyBox";
import TableCard from "components/Card/TableCard";
import TitleBox from "components/Box/TitleBox";
import TimeBox from "components/Box/TimeBox";
// import TimeTable from "components/Table/TimeTable";

import withStyles from "@material-ui/core/styles/withStyles";
import styles from "assets/cardHeaderStyle";

const ManageBill = ({classes, formIsOpen, toggleForm, hdConfirm, form, amount, bills, setBills, hdChange, hdRemove, hdEdit, table, hdChangePay, ...props}) => (
    <AppLayoutContain {...props}>
        <GridContainer>
            <GridItem xs={12} sm={12} md={3}>
                <TitleBox {...form.timeBox} />
                <TimeBox/>

                {/* <TableCard {...table.contract.card}>
                    {
                        bills.length > 0
                        ? <TimeTable
                            tableHeaderColor="primary"
                            tableHead={table.contract.header}
                            tableData={bills.filter(v => v.electric.amount === 0)}
                            hdChangePay={hdChangePay}
                            options={{}}
                            />
                        : <EmptyBox message={table.bill.empty}/>
                    }
                </TableCard> */}

            </GridItem>
            {
                formIsOpen && <GridItem xs={12} sm={12} md={9}>
                    <TitleBox {...form.box} />
                    <ConfirmBar cancel={toggleForm} confirm={hdConfirm}/>
                    <Card customCss="custom-card">
                        <CustomCardHeader
                            title="New Bill Information"
                            subtitle="Please fill in suitable information for your bill"
                        />
                        <CardBody>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={12}>
                                    <FormInput
                                        type="number"
                                        label="Electric/KWH"
                                        placeholder="85"
                                        required
                                        name="electric"
                                        value={amount}
                                        onChange={hdChange}
                                    />
                                </GridItem>
                            </GridContainer>
                        </CardBody>
                    </Card>
                </GridItem>
            }
            {
                formIsOpen || <GridItem xs={12} sm={12} md={9}>
                    <TableCard {...table.bill.card}>
                        <ASBar
                            create={toggleForm}
                            keys={["electric.cost", "electric.amount", "water", "house", "wifi"]}
                            data={bills}
                            setData={setBills}
                        />
                        {
                            bills.length > 0
                            ? <BillTable
                                tableHeaderColor="primary"
                                tableHead={table.bill.header}
                                tableData={bills.filter(v => v.electric.amount !== 0)}
                                hdChangePay={hdChangePay}
                                options={{
                                    remove: hdRemove,
                                    edit: hdEdit
                                }}
                            />
                            : <EmptyBox message={table.bill.empty}/>
                        }
                    </TableCard>
                </GridItem>
            }
        </GridContainer>
    </AppLayoutContain>
);

ManageBill.propTypes = {
    classes: PropTypes.object
};

export default withStyles(styles)(ManageBill);
