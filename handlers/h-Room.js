const db = require("../models");
const {pushId, assignId} = require("../utils/dbSupport");

exports.get = async(req, res, next) => {
    try {
        let list = await db.Room.find()
            .populate("bill_id")
            .populate("price_id")
            .populate({
                path: "people_id",
                populate: {
                    path: "user_id"
                }
            })
            .exec();
        return res.status(200).json(list);
    } catch(err) {
        return next(err);
    }
}

exports.create = async(req, res, next) => {
    try {
        let createdRoom = await db.Room.create(req.body);
        const {price_id, people_id} = req.body;

        // add room_id to price and people_id
        await assignId("Price", price_id, "room_id", createdRoom._id);
        for(let id of people_id) {
            await assignId("People", id, "room_id", createdRoom._id);
        }

        return res.status(200).json(createdRoom);
    } catch(err) {
        return next(err);
    }
}

exports.remove = async(req, res, next) => {
    try {
        let foundRoom = await db.Room.findById(req.params.room_id);
        if(foundRoom) await foundRoom.remove();
        return res.status(200).json(foundRoom);
    } catch(err) {
        return next(err);
    }
}

exports.update = async(req, res, next) => {
    try{
        let foundRoom = await db.Room.findById(req.params.room_id);
        let {name, desc} = req.body;
        foundRoom.name = name;
        foundRoom.desc = desc;

        await foundRoom.save();
        return res.status(200).json(foundRoom);
    } catch(err){
        return next(err);
    }
}
