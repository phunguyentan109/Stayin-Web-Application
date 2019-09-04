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
        let {_id, viewname, email, active, avatar, phone} = user;
        let role = (await db.UserRole.findOne({user: _id}).populate("role").exec()).role;
        // get people_id
        let people_id = (await db.People.findOne({user_id: _id}).populate().exec())._id;
        return res.status(200).json({_id, viewname, avatar, email, role, active, phone, people_id});
    } catch(err) {
        return next(err);
    }
}

exports.updatePassword = async(req, res, next) => {
    try {
        let user = await db.User.findById(req.params.user_id);

        // verify old password and change password
        let {password, newPassword} = req.body;
        let match = await user.comparePassword(password);
        if(match){
            user.password = newPassword;
            await user.save();
            return res.status(200).json(user);
        } else {
            // return error if old password is not matched
            return next({
                status: 400,
                message: err.code === 11000 ? "Sorry, the password is invalid" : err.message
            })
        }
    } catch(err) {
        return next({
            status: 400,
            message: err.code === 11000 ? "Sorry, the password is invalid" : err.message
        });
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

exports.contact = async(req, res, next) => {
    try {
        let {title, content, user_id} = req.body;
        user_id = user_id.map(p => p._id);

        // get user mail from user_id
        for(let id of user_id) {
            user = await db.User.findById(id);

            let {email, viewname} = user;
            await mail.contactUser(email, viewname, content, title);
        }

        return res.status(200).json({viewname});
    } catch(err) {
        console.log(err);
        return next(err);
    }
}

exports.update = async(req, res, next) => {
    try {
        let updateUser = await db.User.findByIdAndUpdate(req.params.user_id, req.body, {new: true});

        return res.status(200).json(updateUser);
    } catch(err) {
        return next(err);
    }
}
