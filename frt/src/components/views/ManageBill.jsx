import React from "react";
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
import Timeline from "components/Box/TimeBox";

const ManageBill = ({openForm, toggleForm, timeline, bill, amount, invoices, setInvoices, hd, ...props}) => (
    <AppLayoutContain {...props}>
        <GridContainer>
            <GridItem xs={12} sm={12} md={3}>
                <TitleBox
                    title="Contract Timeline"
                    subtitle="List of bill date following the contract"
                    color="success"
                />
                {
                    timeline.length > 0
                    ? <Timeline
                        time={timeline}
                        idCheck={bill._id}
                    />
                    : <Card>
                        <CardBody>
                            <EmptyBox message="There is no people living in this room."/>
                        </CardBody>
                    </Card>
                }
            </GridItem>
            {
                openForm && <GridItem xs={12} sm={12} md={9}>
                    <TitleBox
                        title="Create New Bill"
                        subtitle="Here is a subtitle for this table"
                    />
                    <ConfirmBar cancel={toggleForm} confirm={hd.confirm}/>
                    <Card customCss="custom-card">
                        <CustomCardHeader
                            title="Bill Information"
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
                                        onChange={hd.change}
                                    />
                                </GridItem>
                            </GridContainer>
                        </CardBody>
                    </Card>
                </GridItem>
            }
            {
                openForm || <GridItem xs={12} sm={12} md={9}>
                    <TableCard
                        title="Bill List"
                        subtitle="Bill of room in your apartments"
                    >
                        <ASBar
                            create={timeline.length === 0 ? toggleForm : false}
                            keys={["electric.cost", "electric.amount", "water", "house", "wifi"]}
                            data={invoices}
                            setData={setInvoices}
                        />
                        {
                            invoices.length > 0
                            ? <BillTable
                                tableHeaderColor="primary"
                                tableHead={["ID", "Electric", "Water", "House", "Wifi", "Total", "Payment Status", "Options"]}
                                tableData={invoices}
                                hdPay={hd.pay}
                                options={{
                                    remove: hd.remove,
                                    edit: hd.reset
                                }}
                            />
                            : <EmptyBox
                                message="There is no bill information to show here"
                            />
                        }
                    </TableCard>
                </GridItem>
            }
        </GridContainer>
    </AppLayoutContain>
);

export default ManageBill;
