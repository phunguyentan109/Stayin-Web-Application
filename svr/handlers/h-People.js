const db = require("../models");

exports.getAll = async(req, res, next) => {
    try{
        let people = await db.People.find({});
        return res.status(200).json(people);
    }catch(err){
        return res.send(err);
    }
}

exports.create = async(req, res, next) => {
    try{
        let createdPeople = await db.People.create(req.body);
        return res.status(200).json(createdPeople);
    }catch(err){
        return res.send(err);
    }
}

exports.remove = async(req, res, next) => {
    try{
        let foundPeople = await db.People.findById(req.params.people_id);
        foundPeople.remove();
        return res.status(200).json("Delete successfully!");
    }catch(err){
        return res.send(err);
    }
}
