const mongoose = require("mongoose");
const db = require("./index");

const roomSchema = new mongoose.Schema({
    number: {
        type: Number,
        required: true
    },
    people: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "People"
        }
    ],
    bill: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Bill"
        }
    ],
    price: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Price"
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
})

roomSchema.pre("save", async function(next){
    try{
        if(this.isModified("number")){
            let foundRoom = await db.Room.findOne({number: this.number, user: this.user});
            if(foundRoom){
                return next({
                    status: 400,
                    message: "The number is already used!"
                });
            }
        }
        next();
    }catch(err){
        return next(err);
    }
})

roomSchema.pre("remove", async function(next){
    try{
        let foundUser = await db.User.findById(this.user);
        if(foundUser){
            foundUser.room.splice(foundUser.room.indexOf(this._id), 1);
            foundUser.save();
        }

        let foundPrice = await db.Price.findById(this.price);
        if(foundPrice){
            foundPrice.room.splice(foundPrice.room.indexOf(this._id), 1);
            foundPrice.save();
        }

        db.People.deleteMany({"_id": {$in: this.people}});
        db.Bill.deleteMany({"_id": {$in: this.bill}});
        return next();
    }catch(err){
        return next(err);
    }
})

module.exports = mongoose.model("Room", roomSchema);
