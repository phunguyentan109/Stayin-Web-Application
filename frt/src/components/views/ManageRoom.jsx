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
import PriceCheckbox from "components/Checkbox/PriceCheckbox";
import CustomCardHeader from "components/Card/CustomCardHeader";
import FormInput from "components/CustomInput/FormInput";
import ConfirmBar from "components/Bar/ConfirmBar";
import ASBar from "components/Bar/ASBar";

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

const ManageRoom = ({classes, formIsOpen, toggleForm, ...props}) => (
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
                                    />
                                    <FormInput
                                        type="text"
                                        label="Description"
                                        placeholder="Enter some description here..."
                                        area={{
                                            cols: 1,
                                            rows: 1
                                        }}
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
                                    <PriceCheckbox />
                                </GridItem>
                                <GridItem xs={12} sm={6} md={3}>
                                    <PriceCheckbox />
                                </GridItem>
                                <GridItem xs={12} sm={6} md={3}>
                                    <PriceCheckbox />
                                </GridItem>
                                <GridItem xs={12} sm={6} md={3}>
                                    <PriceCheckbox />
                                </GridItem>
                                <GridItem xs={12} sm={6} md={3}>
                                    <PriceCheckbox />
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
                            <RoomTable
                                tableHeaderColor="primary"
                                tableHead={["ID", "Room Name", "People", "Bill Date", "Price Type", "Options"]}
                                tableData={[
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
            </GridContainer>
        }
    </AppLayoutContain>
);

ManageRoom.propTypes = {
    classes: PropTypes.object
};

export default withStyles(styles)(ManageRoom);
