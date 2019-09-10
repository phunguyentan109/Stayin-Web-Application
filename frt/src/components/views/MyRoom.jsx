import React from "react";
import PropTypes from "prop-types";
import AppLayoutContain from "contains/Layout/AppLayout";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import CustomCardHeader from "components/Card/CustomCardHeader";
import FormInput from "components/CustomInput/FormInput";
import ConfirmBar from "contains/Bar/ConfirmBar";
import PeopleBox from "components/Box/PeopleBox";
import TitleBox from "components/Box/TitleBox";
import EmptyBox from "components/Box/EmptyBox";
import {inCurrency} from "services/utils";

const MyRoom = ({hd, form, room, price, mail, confirm, ...props}) => (
    <AppLayoutContain {...props}>
         <GridContainer>
             <GridItem xs={12} sm={12} md={12}>
                 <TitleBox {...form.box} />
             </GridItem>

            <GridItem xs={12} sm={12} md={4}>
                <Card customCss="custom-card">
                    <CustomCardHeader
                        title="Room Information"
                        subtitle="This is information in your room"
                    />
                    <CardBody>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={12}>
                                <h4>Room name: <span>{room.name}</span></h4>
                                <h4>Description: <span>{room.desc}</span></h4>
                            </GridItem>
                        </GridContainer>
                    </CardBody>
                </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={8}>
                <Card customCss="custom-card">
                    <CustomCardHeader
                        title="Price Information"
                        subtitle="This is price aplice for ypur room"
                    />
                    <CardBody>
                        <GridContainer customCss="">
                            <GridItem xs={12} sm={12} md={4}>
                                <h5>Electric: <span>{inCurrency(price.electric)} /kwh</span></h5>
                                <h5>Water: <span>{inCurrency(price.water)} /people</span></h5>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                                <h5>House: <span>{inCurrency(price.house)} /month</span></h5>
                                <h5>Wifi: <span>{inCurrency(price.wifi)} /month</span></h5>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                                <h5>Extra: <span>{inCurrency(price.extra)} /new people</span></h5>
                                <h5>Duration: <span>{price.duration}</span></h5>
                            </GridItem>
                        </GridContainer>
                    </CardBody>
                </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={8}>
                <Card customCss="custom-card">
                    <CustomCardHeader
                        title="People In Room"
                        subtitle="This is currently people in room"
                    />
                    <CardBody>
                        <GridContainer customCss="">
                            {
                                room.people_id.length > 0
                                ? room.people_id.map((p, i) => (
                                    <GridItem xs={12} sm={6} md={3} key={i}>
                                        <PeopleBox
                                            link={p.user_id.avatar.link}
                                            name={p.user_id.viewname}
                                            job={p.job}
                                        />
                                    </GridItem>
                                ))
                                : <GridItem xs={12} sm={12} md={12}>
                                    <EmptyBox
                                        height="100%"
                                        message="There is no people in this room"
                                    />
                                </GridItem>
                            }
                        </GridContainer>
                    </CardBody>
                </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
                <Card customCss="custom-card">
                    <CustomCardHeader
                        title="Amount Electric"
                        subtitle="Please enter number of power meter"
                    />
                    <CardBody>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={12}>
                                <FormInput
                                    type="number"
                                    label="Amount electric"
                                    placeholder="Number on power meter"
                                    name="amount"
                                    value={mail.amount}
                                    onChange={hd.change}
                                    required
                                />
                            </GridItem>
                        </GridContainer>
                    </CardBody>
                </Card>
                {
                    confirm && <GridItem xs={12} sm={12} md={12}>
                        <ConfirmBar confirm={hd.confirm}/>

                    </GridItem>
                }
            </GridItem>
        </GridContainer>

    </AppLayoutContain>
);

MyRoom.propTypes = {
    classes: PropTypes.object
};

export default MyRoom;
