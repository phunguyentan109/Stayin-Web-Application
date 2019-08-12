import React from "react";
import PropTypes from "prop-types";
import AppLayoutContain from "contains/Layout/AppLayout";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import withStyles from "@material-ui/core/styles/withStyles";
import RoomTable from "components/Table/RoomTable.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import PriceBox from "components/Box/PriceBox";
import CustomCardHeader from "components/Card/CustomCardHeader";
import FormInput from "components/CustomInput/FormInput";
import ConfirmBar from "components/Bar/ConfirmBar";
import ASBar from "components/Bar/ASBar";
import PeopleBox from "components/Box/PeopleBox";
import EmptyBox from "components/Box/EmptyBox";

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

const a = () => <i className="fab fa-creative-commons-nc"></i>

const ManageRoom = ({classes, formIsOpen, toggleForm, hdConfirm, form, room, rooms, hdChange, ...props}) => (
    <AppLayoutContain {...props}>
        {
            formIsOpen && <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                    <Card plain>
                        <CardHeader plain color="primary">
                            <h4 className={classes.cardTitleWhite}>
                                Create New Room
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
                                    <ConfirmBar
                                        cancel={toggleForm}
                                        confirm={hdConfirm}
                                    />
                                </GridItem>
                            </GridContainer>
                        </CardBody>
                    </Card>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                    <Card customCss="custom-card">
                        <CustomCardHeader
                            title="New Room Information"
                            subtitle="Please fill in suitable information for your room"
                        />
                        <CardBody>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={12}>
                                    <FormInput
                                        type="text"
                                        label="Room Name"
                                        placeholder="Room Name"
                                        required
                                        name="name"
                                        value={room.name}
                                        onChange={hdChange}
                                    />
                                    <FormInput
                                        type="text"
                                        label="Description"
                                        placeholder="Enter some description here..."
                                        area={{
                                            cols: 1,
                                            rows: 1
                                        }}
                                        name="desc"
                                        value={room.desc}
                                        onChange={hdChange}
                                    />
                                </GridItem>
                            </GridContainer>
                        </CardBody>
                    </Card>
                </GridItem>
                <GridItem xs={12} sm={12} md={8}>
                    <Card customCss="custom-card">
                        <CustomCardHeader
                            title="Select Room Price"
                            subtitle="This will be used in generating room bill"
                        />
                        <CardBody>
                            <GridContainer customCss="price-container">
                                <GridItem xs={12} sm={6} md={3}>
                                    <PriceBox select/>
                                </GridItem>
                                <GridItem xs={12} sm={6} md={3}>
                                    <PriceBox />
                                </GridItem>
                                <GridItem xs={12} sm={6} md={3}>
                                    <PriceBox />
                                </GridItem>
                                <GridItem xs={12} sm={6} md={3}>
                                    <PriceBox />
                                </GridItem>
                                <GridItem xs={12} sm={6} md={3}>
                                    <PriceBox />
                                </GridItem>
                            </GridContainer>
                        </CardBody>
                    </Card>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                    <Card customCss="custom-card">
                        <CustomCardHeader
                            title="People Assigned List"
                            subtitle="This is all the people assigned for this room"
                        />
                        <CardBody>
                            <GridContainer customCss="people-container">
                                <GridItem xs={12} sm={6} md={3}>
                                    <PeopleBox
                                        remove
                                        link="https://source.unsplash.com/120x120"
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={6} md={3}>
                                    <PeopleBox
                                        remove
                                        link="https://source.unsplash.com/140x140"
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={6} md={3}>
                                    <PeopleBox
                                        remove
                                        link="https://source.unsplash.com/160x160"
                                    />
                                </GridItem>
                            </GridContainer>
                        </CardBody>
                    </Card>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                    <Card customCss="custom-card">
                        <CustomCardHeader
                            title="Waiter List"
                            subtitle="This is all the people who don't have room"
                        />
                        <CardBody>
                            <GridContainer customCss="people-container">
                                <GridItem xs={12} sm={6} md={3}>
                                    <PeopleBox
                                        add
                                        link="https://source.unsplash.com/100x100"
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={6} md={3}>
                                    <PeopleBox
                                        add
                                        link="https://source.unsplash.com/150x150"
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={6} md={3}>
                                    <PeopleBox
                                        add
                                        link="https://source.unsplash.com/250x250"
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={6} md={3}>
                                    <PeopleBox
                                        add
                                        link="https://source.unsplash.com/200x200"
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={6} md={3}>
                                    <PeopleBox
                                        add
                                        link="https://source.unsplash.com/300x300"
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
                    <Card>
                        <CardHeader color="primary">
                            <h4 className={classes.cardTitleWhite}>Room List</h4>
                            <p className={classes.cardCategoryWhite}>
                                List of room in your apartments
                            </p>
                        </CardHeader>
                        <CardBody>
                            <ASBar create={toggleForm}/>
                            {
                                rooms.length > 0
                                ? <RoomTable
                                    tableHeaderColor="primary"
                                    tableHead={["ID", "Room Name", "People", "Bill Date", "Price Type", "Options"]}
                                    tableData={rooms}
                                />
                                : <EmptyBox message="There is no room information to show here."/>
                            }
                        </CardBody>
                    </Card>
                </GridItem>
            </GridContainer>
        }
    </AppLayoutContain>
);

ManageRoom.propTypes = {
    classes: PropTypes.object
};

export default withStyles(styles)(ManageRoom);
