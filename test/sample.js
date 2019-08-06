const db = require("../models");

exports.user = {
    email: "staywellsystem7@gmail.com",
    password: "test"
}

exports.priceData = {
    electric: 2232,
    wifi: 100,
    water: 50,
    house: 2000,
    extra: 70
}

exports.room = {
    name: "Room 1",
}

exports.clear = async() => {
    try {
        let foundUser = await db.User.findOne({email: exports.user.email});
        if(foundUser) await foundUser.remove();

        let foundRoom = await db.Room.findOne({name: "Room 1"});
        if(foundRoom) await foundRoom.remove();

        let foundFakeRoom = await db.Room.findOne({name: "fake name"});
        if(foundFakeRoom) await foundFakeRoom.remove();
    } catch(err) {
        console.log(err);
    }
}
