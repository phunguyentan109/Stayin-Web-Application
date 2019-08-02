const db = require("../models");

exports.getAll = async(req, res, next) => {
    try{
        // let rooms = await db.Room.find({user: req.params.user_id}).select("_id number people price bill").exec();
        const user_id = req.params.user_id || req.body.user_id;
        let list = await db.Room.find({user_id}).populate({
            path: "price_id",
        }).exec();
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

        listPrice[0].room.push(createdRoom._id);
        listPrice[0].save();

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
        const {people_id, name} = req.body;
        foundRoom.name = name;
        foundRoom.people_id = people_id;
        
        await foundRoom.save();
        return res.status(200).json(foundRoom);
    } catch(err){
        return next(err);
    }
}
