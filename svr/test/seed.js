const db = require("../models");

exports.user = {
    email: "test@",
    password: "test"
}

exports.guest = {
    email: "guest@",
    password: "guest"
}

exports.price = {
    name: "testPrice",
    electricity: 10,
    wifi: 10,
    water: 10,
    rent: 10
}

exports.room = {
    number: 0
}

exports.invite = {
    provideService: true
}

exports.request = {
    provideService: false
}

exports.clear = async() => {
    // try{
        let foundUser = await db.User.findOne({email: "test@"});
        if(foundUser) await foundUser.remove();

        let foundGuest = await db.User.findOne({email: "guest@"});
        if(foundGuest) await foundGuest.remove();
    // }catch(err){
        // console.log(err);
    // }
}
