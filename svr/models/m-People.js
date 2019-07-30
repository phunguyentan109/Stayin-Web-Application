const mongoose = require("mongoose");
const db = require("../models");

const peopleSchema = new mongoose.Schema({
    profile: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    begin: {
        type: Date,
        default: Date.now
    }
})

peopleSchema.pre("remove", async function(next){
    try{
        let foundRoom = await db.Room.findById(this.room);
        foundRoom.people.splice(foundRoom.people.indexOf(this._id), 1);
        foundRoom.save();
        return next();
    }catch(err){
        return next(err);
    }
})

module.exports = mongoose.model("People", peopleSchema);
