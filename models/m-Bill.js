const mongoose = require("mongoose");
const {spliceId} = require("../utils/dbSupport");

const billSchema = new mongoose.Schema({
    electric: {
        type: Number,
        default: 0
    },
    wifi: {
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
    room_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Room"
    }
})

billSchema.pre("remove", async function(next){
    try {
        await spliceId("Room", "room_id", "bill_id", this._id);
        return next();
    } catch(err) {
        next(err);
    }
})

module.exports = mongoose.model("Bill", billSchema);
