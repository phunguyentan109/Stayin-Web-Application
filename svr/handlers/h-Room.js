const db = require("../models");

exports.getAll = async(req, res, next) => {
    try{
        // let rooms = await db.Room.find({user: req.params.user_id}).select("_id number people price bill").exec();
        const user_id = req.params.user_id || req.body.user_id;
        let list = await db.Room.find({user_id}).populate({
            path: "price_id",
        }).exec();
        return res.status(200).json(list);
    }catch(err){
        return next(err);
    }
}

exports.create = async(req, res, next) => {
    try{
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
        if(foundRoom) await foundRoom.remove();
        return res.status(200).json(foundRoom);
    }catch(err){
        return next(err);
    }
}

exports.update = async(req, res, next) => {
    try{
        let foundRoom = await db.Room.findById(req.params.room_id);
        foundRoom.name = req.body.name;

        await foundRoom.save();
        return res.status(200).json(foundRoom);
    } catch(err){
        return next(err);
    }
}
