const db = require("../models");

exports.user = {
    email: "test@",
    password: "test"
}

exports.clear = async() => {
    try {
        let foundUser = await db.User.findOne({email: "test@"});
        if(foundUser) await foundUser.remove();

        let foundGuest = await db.User.findOne({email: "guest@"});
        if(foundGuest) await foundGuest.remove();
    } catch(err) {
        console.log(err);
    }
}
