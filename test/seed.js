const db = require("../models");

exports.user = {
    email: "owner@",
    password: "owner"
}

exports.price = {
    electric: 2232,
    wifi: 1,
    water: 50,
    house: 2000,
    extra: 70
}

exports.room = {
    name: "Room 1",
}

exports.clear = async() => {
    try {
        let foundRoom = await db.Room.findOne({name: "Room 1"});
        if(foundRoom) await foundRoom.remove();

        let foundFakeRoom = await db.Room.findOne({name: "fake name"});
        if(foundFakeRoom) await foundFakeRoom.remove();

        let foundPrice = await db.Price.findOne({wifi: 1});
        if(foundPrice) await foundPrice.remove();
    } catch(err) {
        console.log(err);
    }
}
