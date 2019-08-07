const db = require("../models");

exports.get = async(req, res, next) => {
    try {
        let people = await db.People.find().populate("room_id").populate("user_id").exec();
        return res.status(200).json(people);
    } catch(err) {
        return next(err);
    }
}

exports.remove = async(req, res, next) => {
    try {
        let foundPeople = await db.People.findById(req.params.people_id);
        if(foundPeople) foundPeople.remove();
        return res.status(200).json(foundPeople);
    } catch(err) {
        return next(err);
    }
}

exports.update = async(req, res, next) => {
    try {
        let updatePeople = await db.People.findByIdAndUpdate(req.params.people_id, req.body, {new: true});
        return res.status(200).json(updatePeople);
    } catch(err) {
        return next(err);
    }
}
