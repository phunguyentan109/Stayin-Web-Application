const mongoose = require("mongoose");
const db = require("../models");

const priceSchema = new mongoose.Schema({
    room_id: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Room"
        }
    ],
    electric: {
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
    house: {
        type: Number,
        default: 0,
        required: true
    },
    extra: {
        type: String
    }
})

module.exports = mongoose.model("Price", priceSchema);
