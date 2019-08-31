import React from "react";
import AppLayoutContain from "contains/Layout/AppLayout";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import UserBox from "components/Box/UserBox";
import CustomCardHeader from "components/Card/CustomCardHeader";
import FormInput from "components/CustomInput/FormInput";
import ConfirmBar from "contains/Bar/ConfirmBar";
import EmptyBox from "components/Box/EmptyBox";
import TitleBox from "components/Box/TitleBox";

const SendUser = ({form, hdChange, hdConfirm, confirm, hdSelectUser, userList, mail, ...props}) => (
    <AppLayoutContain {...props}>
        <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
                <TitleBox {...form.box} />
            </GridItem>

            <GridItem xs={12} sm={12} md={4}>
                <Card customCss="custom-card">
                    <CustomCardHeader
                        title="Edit Profile"
                        subtitle="Complete your profile"
                    />
                    <CardBody>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={12}>
                                <FormInput
                                    type="text"
                                    label="Title"
                                    placeholder="Enter your mail title"
                                    required
                                    name="title"
                                    value={mail.title}
                                    onChange={hdChange}
                                />
                                <FormInput
                                    type="text"
                                    label="Content"
                                    placeholder="Enter your mail content"
                                    area={{
                                            cols: 1,
                                            rows: 5
                                    }}
                                    required
                                    name="content"
                                    value={mail.content}
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
                        title="Select User"
                        subtitle="This will be used for send mail for your member"
                    />
                    <CardBody>
                        <GridContainer customCss="price-container">
                            {
                                userList.length > 0
                                ? userList.map((us, i) => (
                                    <GridItem xs={12} sm={6} md={3} key={i}>
                                        <UserBox
                                            {...us}
                                            select={us._id === mail.user_id}
                                            choose={hdSelectUser.bind(this, us._id)}
                                            shouldDisable={mail.user_id.length > 0}
                                        />
                                    </GridItem>
                                ))
                                : <GridItem xs={12} sm={12} md={12}>
                                    <EmptyBox
                                        height="100%"
                                        message="There is no user to select"
                                    />
                                </GridItem>
                            }
                        </GridContainer>
                    </CardBody>
                </Card>
            </GridItem>
            {
                confirm && <ConfirmBar confirm={hdConfirm}/>
            }
        </GridContainer>
    </AppLayoutContain>
)

export default SendUser;
