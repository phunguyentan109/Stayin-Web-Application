const mongoose = require("mongoose");
const db = require("../models");

const priceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    electricity: {
        type: Number,
        default: 0,
        required: true
    },
    wifi: {
        type: Number,
        default: 0,
        required: true
    },
    water: {
        type: Number,
        default: 0,
        required: true
    },
    rent: {
        type: Number,
        default: 0,
        required: true
    },
    room: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Room"
        }
    ],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
})

priceSchema.pre("remove", async function(next){
    try {
        let foundUser = await db.User.findById(this.user);
        foundUser.price.splice(foundUser.price.indexOf(this._id), 1);
        foundUser.save();
        return next();
    } catch(err) {
        return next(err);
    }
})

function toMoneyType(num){
    return num * 1000;
}

module.exports = mongoose.model("Price", priceSchema);
