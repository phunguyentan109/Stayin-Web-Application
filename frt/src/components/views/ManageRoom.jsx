import React from "react";
import PropTypes from "prop-types";
import AppLayoutContain from "contains/Layout/AppLayout";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import withStyles from "@material-ui/core/styles/withStyles";
import RoomTable from "components/Table/RoomTable.jsx";


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

const ManageRoom = ({classes, ...props}) => (
    <AppLayoutContain {...props}>
        <GridItem xs={12} sm={12} md={12}>
            <Card>
                <CardHeader color="primary">
                    <h4 className={classes.cardTitleWhite}>Room List</h4>
                    <p className={classes.cardCategoryWhite}>
                        List of room in your apartments
                    </p>
                </CardHeader>
                <CardBody>
                    <RoomTable
                        tableHeaderColor="primary"
                        tableHead={["ID", "Room Name", "People", "Bill Date", "Type", "Options"]}
                        tableData={
                            [
                                {
                                room_Name: "Room 101",
                                people_id: [
                                    {
                                        user_id: {
                                            avatar: {
                                                link: "https://images.unsplash.com/photo-1563729574084-950da51d3822?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&ixlib=rb-1.2.1&q=80&w=100"
                                            }
                                        }
                                    },
                                    {
                                        user_id: {
                                            avatar: {
                                                link: "https://images.unsplash.com/photo-1563729574084-950da51d3822?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&ixlib=rb-1.2.1&q=80&w=100"
                                            }
                                        }
                                    }
                                ],
                                bill_date: "29/7/2019",
                                price_id: {
                                    type: "Price 001"
                                }
                            },
                            {
                                room_Name: "Room 202",
                                people_id: [
                                    {
                                        user_id: {
                                            avatar: {
                                                link: "https://images.unsplash.com/photo-1563729574084-950da51d3822?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&ixlib=rb-1.2.1&q=80&w=100"
                                            }
                                        }
                                    },
                                    {
                                        user_id: {
                                            avatar: {
                                                link: "https://images.unsplash.com/photo-1563729574084-950da51d3822?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&ixlib=rb-1.2.1&q=80&w=100"
                                            }
                                        }
                                    },
                                    {
                                        user_id: {
                                            avatar: {
                                                link: "https://images.unsplash.com/photo-1563729574084-950da51d3822?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&ixlib=rb-1.2.1&q=80&w=100"
                                            }
                                        }
                                    },
                                    {
                                        user_id: {
                                            avatar: {
                                                link: "https://images.unsplash.com/photo-1563729574084-950da51d3822?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&ixlib=rb-1.2.1&q=80&w=100"
                                            }
                                        }
                                    },
                                    {
                                        user_id: {
                                            avatar: {
                                                link: "https://images.unsplash.com/photo-1563729574084-950da51d3822?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&ixlib=rb-1.2.1&q=80&w=100"
                                            }
                                        }
                                    },
                                    {
                                        user_id: {
                                            avatar: {
                                                link: "https://images.unsplash.com/photo-1563729574084-950da51d3822?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&ixlib=rb-1.2.1&q=80&w=100"
                                            }
                                        }
                                    },
                                    {
                                        user_id: {
                                            avatar: {
                                                link: "https://images.unsplash.com/photo-1563729574084-950da51d3822?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&ixlib=rb-1.2.1&q=80&w=100"
                                            }
                                        }
                                    }
                                ],
                                bill_date: "31/7/2019",
                                price_id: {
                                    type: "Price 002"
                                }
                            }
                        ]}
                    />
                </CardBody>
            </Card>
        </GridItem>
    </AppLayoutContain>
);

ManageRoom.propTypes = {
    classes: PropTypes.object
};

export default withStyles(styles)(ManageRoom);
