const mongoose = require("mongoose");
const {spliceId} = require("../utils/dbSupport");
const db = require("../models");

const billSchema = new mongoose.Schema({
    room_id:  {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Room"
    },
    electric: {
        amount: {
            type: Number,
            default: 0
        },
        cost: {
            type: Number,
            default: 0
        }
    },
    water: {
        type: Number,
        default: 0
    },
    house: {
        type: Number,
        default: 0
    },
    wifi: {
        type: Number,
        default: 0
    },
    inContract: {
        type: Boolean,
        default: true
    },
    pay: {
        status: {
            type: Boolean,
            default: false
        },
        time: Date
    }
})

billSchema.pre("remove", async function(next){
    try {
        await spliceId("Room", this.room_id, "bill_id", this._id);
        return next();
    } catch (err) {
        return next(err);
    }
})

module.exports = mongoose.model("Bill", billSchema);
