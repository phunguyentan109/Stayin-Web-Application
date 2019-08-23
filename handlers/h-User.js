const db = require("../models");
const {genToken} = require("../utils/token");
const mail = require("../utils/mail");

exports.signUp = async(req, res, next) => {
    try {
        let vname = req.body.email.split("@")[0];
        let user = await db.User.create({viewname: vname, ...req.body});

        // add role for user
        let {_id, viewname, email, active, avatar} = user;
        let role = await db.Role.findOne({code: "001"});
        await db.UserRole.create({role: role._id, user: _id});

        // gen token for storing on client
        let token = genToken(_id, role);

        //send activate mail
        await mail.activate(email, viewname, _id, req.headers.host);

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
        let {_id, viewname, email, active, avatar} = user;
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

exports.get = async(req, res, next) => {
    try {
        let users = await db.User.find({active: false});
        return res.status(200).json(users);
    } catch(err) {
        return next(err);
    }
}

exports.remove = async(req, res, next) => {
    try {
        let user = await db.User.findById(req.params.user_id);
        if(user) user.remove();
        return res.status(200).json(user);
    } catch(err) {
        return next(err);
    }
}

exports.getOne = async(req, res, next) => {
    try {
        let user = await db.User.findById(req.params.user_id);
        let {_id, viewname, email, active, avatar} = user;
        let role = (await db.UserRole.findOne({user: _id}).populate("role").exec()).role;
        return res.status(200).json({_id, viewname, avatar, email, role, active});
    } catch(err) {
        return next(err);
    }
}

exports.activate = async(req, res, next) => {
    try {
        let user = await db.User.findById(req.params.user_id);
        if(user) {
            user.active = true;
            await user.save();
            // create people
            people = await db.People.create({user_id: user._id});
            return res.status(200).json({user, people});
        }
        return next({
            status: 500,
            message: "Oops! Something went wrong!"
        })
    } catch(err) {
        console.log(err);
        return next(err);
    }
}
