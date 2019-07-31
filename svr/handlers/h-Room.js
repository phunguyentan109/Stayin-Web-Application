const db = require("../models");
// const ut = require("../ut");

exports.getAll = async(req, res, next) => {
    try{
        let rooms = await db.Room.find({user: req.params.user_id}).select("_id number people price bill").exec();
        return res.status(200).json(rooms);
    }catch(err){
        return next(err);
    }
}

exports.create = async(req, res, next) => {
    try{
        let listPrice = await db.Price.find({user: req.params.user_id});
        req.body.user = req.params.user_id;
        req.body.price = listPrice[0]._id;
        let createdRoom = await db.Room.create(req.body);

        // push the id of created room to found price
        listPrice[0].room.push(createdRoom._id);
        listPrice[0].save();

        // await ut.addRoleToUser(220, req.params.user_id);
        // await ut.pushIdToCol("User", "room", req.params.user_id, createdRoom._id);
        return res.status(200).json(createdRoom);
    }catch(err){
        return next(err);
    }
}

exports.remove = async(req, res, next) => {
    try{
        let foundRoom = await db.Room.findById(req.params.room_id);
        await foundRoom.remove();
        return res.status(200).json(foundRoom);
    }catch(err){
        return next(err);
    }
}

exports.update = async(req, res, next) => {
    try{
        let foundRoom = await db.Room.findById(req.params.room_id);
        foundRoom.number = req.body.number;
        await foundRoom.save();
        return res.status(200).json(foundRoom);
    } catch(err){
        return next(err);
    }
}
