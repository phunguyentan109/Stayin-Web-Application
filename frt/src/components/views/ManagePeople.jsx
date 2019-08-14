import React from "react";
import PropTypes from "prop-types";
import AppLayoutContain from "contains/Layout/AppLayout";
import GridItem from "components/Grid/GridItem.jsx";
import PeopleTable from "components/Table/PeopleTable.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import TableCard from "components/Card/TableCard";
import ASBar from "components/Bar/ASBar";

import withStyles from "@material-ui/core/styles/withStyles";
import styles from "assets/cardHeaderStyle";

const ManagePeople = ({classes, table, list, hdRemove, ...props}) => (
    <AppLayoutContain {...props}>
        <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
                <TableCard {...table.account.card} color="warning">
                    <ASBar/>
                    <PeopleTable
                        tableHeaderColor="primary"
                        tableHead={table.account.header}
                        tableData={[]}
                        options={{remove: hdRemove}}
                    />
                </TableCard>
            </GridItem>
            <GridItem xs={12} sm={12} md={12}>
                <TableCard {...table.people.card}>
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

export default withStyles(styles)(ManagePeople);
