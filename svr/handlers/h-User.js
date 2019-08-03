const db = require("../models");
const {genToken} = require("../utils/token");

exports.signUp = async(req, res, next) => {
    try {
        let vname = req.body.email.split("@")[0];
        let user = await db.User.create({viewname: vname, ...req.body});
        let {_id, viewname, email, avatar} = user;
        let role = await db.Role.findOne({code: "001"});
        await db.UserRole.create({role: role._id, user: _id});
        let token = genToken(_id, role);
        return res.status(200).json({_id, viewname, avatar, email, role, active, token});
    } catch(err) {
        return next({
            status: 400,
            message: err.code === 11000 ? "Sorry, that email/password is taken or invalid" : err.message
        })
    }
}

exports.logIn = async(req, res, next) => {
    try {
        let user = await db.User.findOne({email: req.body.email});
        let {_id, viewname, email, avatar} = user;
        let match = await user.comparePassword(req.body.password);
        if(match){
            let role = (await db.UserRole.findOne({user: _id}).populate("role").exec()).role;
            let token = genToken(_id, role);
            return res.status(200).json({_id, viewname, avatar, email, role, active, token});
        } else {
            return next({
                status: 400,
                message: "Invalid email/password."
            })
        }
    } catch(err) {
        return next({
            status: 400,
            message: "Invalid email/password."
        })
    }
}
