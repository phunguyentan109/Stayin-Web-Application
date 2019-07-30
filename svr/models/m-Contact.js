const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    receiver: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    provideService: {
        type: Boolean,
        default: true
    },
    status: {
        type: String,
        default: "Waiting"
    }
})

module.exports = mongoose.model("Contact", contactSchema);
