const db = require("../models");
const {casDelete} = require("../utils/dbSupport");

exports.user = {
    email: "staywellsystem7@gmail.com",
    password: "test"
}

exports.owner = {
    email: "owner@",
    password: "owner"
}

exports.price = {
    electric: 2232,
    wifi: 1,
    water: 50,
    house: 2000,
    extra: 70,
    type: "priceTest",
    duration: 6
}

exports.bill = {
    electric: 2232,
    wifi: 1,
    water: 50,
    house: 2000,
    extra: 70,
    inContract: true
}

exports.room = {
    name: "Room 1",
}

exports.clear = async() => {
    try {
        await casDelete("User", "email", exports.user.email);
        await casDelete("Room", "name", exports.room.name);
        await casDelete("Price", "type", exports.price.type);
        await casDelete("Bill", "type", exports.bill.type);
    } catch(err) {
        console.log(err);
    }
}
