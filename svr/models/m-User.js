const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const db = require("./index");

const userSchema = mongoose.Schema({
    viewname: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    profileImg: {
        type: String,
        default: "https://images.unsplash.com/photo-1546102597-e1f46ca8bb28?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
    },
    room: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Room"
        }
    ],
    price: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Price"
        }
    ],
    waiter: [ // this field is for people who have accept the invitation of hiring but hasn't got their rooms
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ]
});

userSchema.pre("save", async function(next){
    try {
        //only hash the password if it is modified or new
        if(!this.isModified("password")) return next();

        let hashPassword = await bcrypt.hash(this.password, 10);
        this.password = hashPassword;
        return next();
    } catch(err) {
        return next(err);
    }
})

userSchema.pre("remove", async function(next){
    try{
        await db.UserRole.deleteMany({user: this._id});
        await db.Price.deleteMany({_id: {$in: this.price}});

        if(this.room.length > 0){
            for(let roomId of this.room){
                let foundRoom = await db.Room.findOne({_id: roomId});
                await foundRoom.remove();
            }
        }

        return next();
    }catch(err){
        next(err);
    }
})

userSchema.methods.comparePassword = async function(candidatePassword, next){
    try {
        let isMatch = await bcrypt.compare(candidatePassword, this.password);
        return isMatch;
    } catch(err) {
        return next(err);
    }
}

module.exports = mongoose.model("User", userSchema);
