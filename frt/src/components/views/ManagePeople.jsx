import React from "react";
import PropTypes from "prop-types";
import AppLayoutContain from "contains/Layout/AppLayout";
import GridItem from "components/Grid/GridItem.jsx";
import UserTable from "components/Table/UserTable.jsx";
import PeopleTable from "components/Table/PeopleTable.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import TableCard from "components/Card/TableCard";
import ASBar from "components/Bar/ASBar";

const ManagePeople = ({classes, table, list, userList, hdRemove, rmUser, ...props}) => (
    <AppLayoutContain {...props}>
        <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
                {
                    userList.length > 0 && <TableCard {...table.account.card} color="warning">
                        <ASBar/>
                        <UserTable
                            tableHeaderColor="primary"
                            tableHead={table.account.header}
                            tableData={userList}
                            options={{remove: rmUser}}
                        />
                    </TableCard>
                }
            </GridItem>
            <GridItem xs={12} sm={12} md={12}>
                <TableCard {...table.people.card}>
                    <ASBar/>
                    <PeopleTable
                        tableHeaderColor="primary"
                        tableHead={table.people.header}
                        tableData={list}
                        options={{remove: hdRemove}}
                    />
                </TableCard>
            </GridItem>
        </GridContainer>
    </AppLayoutContain>
);

ManagePeople.propTypes = {
    classes: PropTypes.object
};

export default ManagePeople;
