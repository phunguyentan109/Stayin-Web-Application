import React from "react";
import AppLayoutContain from "contains/Layout/AppLayout";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import CustomCardHeader from "components/Card/CustomCardHeader";
import FormInput from "components/CustomInput/FormInput";
import ConfirmBar from "contains/Bar/ConfirmBar";
import EmptyBox from "components/Box/EmptyBox";
import TitleBox from "components/Box/TitleBox";
import ContactBox from "components/Box/ContactBox";

const Contact = ({form, hdChange, hdConfirm, confirm, hdSelectUser, userList, mail, ...props}) => (
    <AppLayoutContain {...props}>
        <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
                <TitleBox {...form.box} />
            </GridItem>

            <GridItem xs={12} sm={12} md={6}>
                <Card customCss="custom-card">
                    <CustomCardHeader
                        title="Contact Information"
                        subtitle="Fill in suitable information to send to people"
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
            <GridItem xs={12} sm={12} md={6}>
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
                                    <GridItem xs={12} sm={6} md={6} key={i}>
                                        <ContactBox
                                            {...us}
                                            select={us._id === mail.user_id}
                                            choose={hdSelectUser.bind(this, us._id)}
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
            <GridItem xs={12} sm={12} md={12}>
                {
                    confirm && <ConfirmBar confirm={hdConfirm}/>
                }
            </GridItem>
        </GridContainer>
    </AppLayoutContain>
)

export default Contact;
