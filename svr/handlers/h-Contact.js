const db = require("../models");
const ut = require("../ut");

exports.create = async(req, res, next) => {
    try {
        let createdContact = await db.Contact.create(req.body);
        return res.status(200).json(createdContact);
    } catch(err) {
        return next(err);
    }
}

exports.getInvites = async(req, res, next) => {
    try {
        let invites = await db.Contact.find({sender: req.params.user_id, provideService: true});
        return res.status(200).json(invites);
    } catch(err) {
        return next(err);
    }
}

exports.getRequests = async(req, res, next) => {
    try{
        let requests = await db.Contact.find({sender: req.params.user_id, provideService: false});
        return res.status(200).json(requests);
    }catch(err){
        return next(err);
    }
}

exports.remove = async(req, res, next) => {
    try {
        let foundContact = await db.Contact.findById(req.params.contact_id);
        if(foundContact) foundContact.remove();
        return res.status(200).json(foundContact);
    } catch(err) {
        return next(err);
    }
}

exports.update = async(req, res, next) => {
    try{
        let updatedContact = await db.Contact.findByIdAndUpdate(req.params.contact_id, req.body, {new: true});
        if(req.body.status === "Accept"){
            if(updatedContact.provideService){
                await ut.pushIdToCol("User", "waiter", updatedContact.sender, req.params.user_id);
            } else {
                await ut.pushIdToCol("User", "waiter", req.params.user_id, updatedContact.sender);
            }
        }
        return res.status(200).json(updatedContact);
    }catch(err){
        return next(err);
    }
}
