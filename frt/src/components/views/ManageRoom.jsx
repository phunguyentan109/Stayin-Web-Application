import React from "react";
import PropTypes from "prop-types";
import AppLayoutContain from "contains/Layout/AppLayout";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import RoomTable from "components/Table/RoomTable.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import PriceBox from "components/Box/PriceBox";
import CustomCardHeader from "components/Card/CustomCardHeader";
import FormInput from "components/CustomInput/FormInput";
import ConfirmBar from "contains/Bar/ConfirmBar";
import ASBar from "contains/Bar/ASBar";
import PeopleBox from "components/Box/PeopleBox";
import EmptyBox from "components/Box/EmptyBox";
import TableCard from "components/Card/TableCard";
import TitleBox from "components/Box/TitleBox";

const ManageRoom = ({formIsOpen, toggleForm, hdConfirm, hdBill, form, room, rooms, hdChange, hdRemove, hdEdit, table, people, assignPeople, price, selectPrice, setRooms, ...props}) => (
    <AppLayoutContain {...props}>
        {
            formIsOpen && <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                    <TitleBox {...form.box} />
                    <ConfirmBar cancel={toggleForm} confirm={hdConfirm}/>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                    <Card customCss="custom-card">
                        <CustomCardHeader {...form.info}/>
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
                                {
                                    price.length > 0
                                    ? price.map((pr, i) => (
                                        <GridItem xs={12} sm={6} md={3} key={i}>
                                            <PriceBox
                                                {...pr}
                                                select={pr._id === room.price_id}
                                                choose={selectPrice.bind(this, pr._id)}
                                                shouldDisable={room._id && room.people_id.length > 0}
                                            />
                                        </GridItem>
                                    ))
                                    : <GridItem xs={12} sm={12} md={12}>
                                        <EmptyBox
                                            height="100%"
                                            message="There is no price to select"
                                        />
                                    </GridItem>
                                }
                            </GridContainer>
                        </CardBody>
                    </Card>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                    <Card customCss="custom-card">
                        <CustomCardHeader {...form.people}/>
                        <CardBody>
                            <GridContainer customCss="people-container">
                                {
                                    room.people_id.length > 0
                                    ? room.people_id.map((p, i) => (
                                        <GridItem xs={12} sm={6} md={3} key={i}>
                                            <PeopleBox
                                                link={p.user_id.avatar.link}
                                                name={p.user_id.viewname}
                                                job={p.job}
                                                remove={assignPeople.bind(this, p, false)}
                                            />
                                        </GridItem>
                                    ))
                                    : <GridItem xs={12} sm={12} md={12}>
                                        <EmptyBox
                                            height="100%"
                                            message="There is no people assigned for this room"
                                        />
                                    </GridItem>
                                }
                            </GridContainer>
                        </CardBody>
                    </Card>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                    <Card customCss="custom-card">
                        <CustomCardHeader {...form.wait}/>
                        <CardBody>
                            <GridContainer customCss="people-container">
                                {
                                    people.length > 0
                                    ? room.price_id && room.price_id.length > 0
                                        ? people.map((p, i) => (
                                            <GridItem xs={12} sm={6} md={3} key={i}>
                                                <PeopleBox
                                                    link={p.user_id.avatar.link}
                                                    name={p.user_id.viewname}
                                                    job={p.job}
                                                    add={assignPeople.bind(this, p)}
                                                />
                                            </GridItem>
                                        ))
                                        : <GridItem xs={12} sm={12} md={12}>
                                            <EmptyBox
                                                height="100%"
                                                message="Please select the room's price first."
                                            />
                                        </GridItem>
                                    : <GridItem xs={12} sm={12} md={12}>
                                        <EmptyBox
                                            height="100%"
                                            message="There is no waiter for this room"
                                        />
                                    </GridItem>
                                }
                            </GridContainer>
                        </CardBody>
                    </Card>
                </GridItem>
            </GridContainer>
        }

        {
            formIsOpen || <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                    <TableCard {...table.room.card}>
                        <ASBar
                            keys={["name", "price_id.type"]}
                            create={toggleForm}
                            data={rooms}
                            setData={setRooms}
                        />
                        {
                            rooms.length > 0
                            ? <RoomTable
                                tableHeaderColor="primary"
                                tableHead={table.room.header}
                                tableData={rooms}
                                options={{
                                    remove: hdRemove,
                                    edit: hdEdit,
                                    more: [
                                        {
                                            icon: "fas fa-file-invoice-dollar",
                                            name: "View all bills",
                                            className: "edit",
                                            fn: hdBill
                                        }
                                    ]
                                }}
                            />
                            : <EmptyBox message={table.room.empty}/>
                        }
                    </TableCard>
                </GridItem>
            </GridContainer>
        }
    </AppLayoutContain>
);

ManageRoom.propTypes = {
    classes: PropTypes.object
};

export default ManageRoom;
