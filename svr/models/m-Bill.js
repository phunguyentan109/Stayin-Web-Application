const mongoose = require("mongoose");

const billSchema = new mongoose.Schema({
    electricity: {
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
    rent: {
        type: Number,
        default: 0
    },
    total: {
        type: Number,
        default: 0
    },
    room: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Room"
    }
})

billSchema.pre("remove", async function(next){
    try{
        let room = await db.Room.findById(this.room);
        room.bill.remove(this._id);
        await room.save();
    }catch(err){
        next(err);
    }
})

module.exports = mongoose.model("Bill", billSchema);
