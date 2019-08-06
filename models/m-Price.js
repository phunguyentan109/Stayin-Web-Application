const mongoose = require("mongoose");
const db = require("../models");

const priceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
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
    room_id: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Room"
        }
    ]
})

module.exports = mongoose.model("Price", priceSchema);
