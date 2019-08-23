import React from "react";
import PropTypes from "prop-types";
import AppLayoutContain from "contains/Layout/AppLayout";
import GridItem from "components/Grid/GridItem.jsx";
import UserTable from "components/Table/UserTable.jsx";
import PeopleTable from "components/Table/PeopleTable.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import TableCard from "components/Card/TableCard";
import ASBar from "contains/Bar/ASBar";
import EmptyBox from "components/Box/EmptyBox";

const ManagePeople = ({classes, table, list, userList, hdRemove, rmUser, setPeople, peopleList, ...props}) => (
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
                    <ASBar
                        keys={["user_id.viewname", "job", "user_id.email", "user_id.phone", "room_id.name"]}
                        data={peopleList}
                        setData={setPeople}
                    />
                    {
                        list.length > 0
                        ? <PeopleTable
                            tableHeaderColor="primary"
                            tableHead={table.people.header}
                            tableData={list}
                            options={{remove: hdRemove}}
                        />
                        : <EmptyBox message={table.people.empty}/>
                    }
                </TableCard>
            </GridItem>
        </GridContainer>
    </AppLayoutContain>
);

ManagePeople.propTypes = {
    classes: PropTypes.object
};

export default ManagePeople;
