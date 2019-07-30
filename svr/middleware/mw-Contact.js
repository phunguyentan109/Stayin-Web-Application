const db = require("../models");
const ut = require("../ut");

exports.makeDecision = async(req, res, next) => {
    try{
        let foundContact = await db.Contact.findById(req.params.contact_id);
        // check if the user is the one who sends the contact
        if(req.params.user_id !== foundContact.receiver){
            return next({
                status: 101,
                message: "Oops, something is wrong..."
            })
        }
        return next();
    }catch(err){
        return next(err);
    }
}

exports.checkType = async(req, res, next) => {
    let roleExist = await ut.isRoleExist(220, req.params.user_id);
    if(req.body.provideService && !roleExist){
        return next({
            status: 101,
            message: "Oops, something went wrong."
        })
    }
    return next();
}
