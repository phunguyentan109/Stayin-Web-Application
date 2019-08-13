import React from "react";
import PropTypes from "prop-types";
import AppLayoutContain from "contains/Layout/AppLayout";
import GridItem from "components/Grid/GridItem.jsx";
import PeopleTable from "components/Table/PeopleTable.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";

import withStyles from "@material-ui/core/styles/withStyles";
import styles from "assets/cardHeaderStyle";

const ManagePeople = ({classes, table, list, hdRemove, ...props}) => (
    <AppLayoutContain {...props}>
        <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
                <Card>
                    <CardHeader color="primary">
                        <h4 className={classes.cardTitleWhite}>People List</h4>
                        <p className={classes.cardCategoryWhite}>
                            List of all people who are hiring/living in your apartments
                        </p>
                    </CardHeader>
                    <CardBody>
                        <PeopleTable
                            tableHeaderColor="primary"
                            tableHead={table.header}
                            tableData={list}
                            options={{remove: hdRemove}}
                        />
                    </CardBody>
                </Card>
            </GridItem>
        </GridContainer>
    </AppLayoutContain>
);

ManagePeople.propTypes = {
    classes: PropTypes.object
};

export default withStyles(styles)(ManagePeople);
