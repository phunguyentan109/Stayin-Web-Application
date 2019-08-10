const mongoose = require("mongoose");
const {spliceId} = require("../utils/dbSupport");
const db = require("../models");

const billSchema = new mongoose.Schema({
    room_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Room"
    },
    electric: {
        type: Number,
        default: 0
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
    extra: {
        type: Number,
        default: 0
    },
    inContract: {
        type: Boolean,
        default: true
    }
})

billSchema.pre("remove", async function(next){
    try {
        await spliceId("Room", this._id);
        await db.Room.deleteMany({_id: {$in: this.room_id}});
        return next();
    } catch (err) {
        return next(err);
    }
})

module.exports = mongoose.model("Bill", billSchema);
