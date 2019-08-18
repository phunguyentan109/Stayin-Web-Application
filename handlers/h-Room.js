const db = require("../models");
const {pushId, assignId, spliceId} = require("../utils/dbSupport");

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

exports.getOne = async(req, res, next) => {
    try {
        let one = await db.Room.findById(req.params.room_id)
            .populate("bill_id")
            .populate({
                path: "people_id",
                populate: {
                    path: "user_id"
                }
            })
            .exec();
        return res.status(200).json(one);
    } catch(err) {
        console.log(err);
    }
}

exports.create = async(req, res, next) => {
    try {
        let createdRoom = await db.Room.create(req.body);
        const {price_id, people_id} = req.body;
        // add room_id to price and people_id
        await pushId("Price", price_id, "room_id", createdRoom._id);
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
        const {room_id} = req.params;
        let {name, desc, people_id, price_id} = req.body;
        people_id = people_id.map(p => p._id);
        let foundRoom = await db.Room.findById(room_id);

        // remove old people and add new people to the room
        let oldPeople = foundRoom.people_id.filter(id => people_id.indexOf(id) === -1);
        let curPeople = foundRoom.people_id.filter(id => people_id.indexOf(id) !== -1);
        let newPeople = people_id.filter(id => curPeople.indexOf(id) === -1);

        // remove room id of old people
        for(let id of oldPeople) {
            await assignId("People", id, "room_id", false);
        }

        // assign room id for new people
        for(let id of newPeople) {
            await assignId("People", id, "room_id", foundRoom._id);
        }

        // update room
        foundRoom.people_id = [...curPeople, ...newPeople];
        foundRoom.name = name;
        foundRoom.desc = desc;
        if(foundRoom.price_id !== price_id) {
            await spliceId("Price", foundRoom.price_id, "room_id", foundRoom._id);
            foundRoom.price_id = price_id;
            await pushId("Price", price_id, "room_id", foundRoom._id);
        }
        await foundRoom.save();

        return res.status(200).json(foundRoom);
    } catch(err){
        return next(err);
    }
}
