const mongoose = require("mongoose");
const db = require("./index");
const {spliceId, assignId} = require("../utils/dbSupport");

const roomSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    desc: String,
    people_id: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "People"
        }
    ],
    billDate: Date,
    bill_id: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Bill"
        }
    ],
    price_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Price"
    }
});

roomSchema.pre("remove", async function(next){
    try {
        for(let id of this.people_id){
            await assignId("People", id, "room_id", false);
        }
        await spliceId("Price", this.price_id, "room_id", this._id);
        await db.Bill.deleteMany({_id: {$in: this.bill_id}});
        return next();
    } catch (err) {
        return next(err);
    }
})

module.exports = mongoose.model("Room", roomSchema);
