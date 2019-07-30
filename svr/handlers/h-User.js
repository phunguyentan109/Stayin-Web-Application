const db = require("../models");
const {generateToken} = require("../middleware/mw-User");

exports.signUp = async(req, res, next) => {
    try{
        let user = await db.User.create(req.body);
        let {id, viewname, email, profileImg} = user;
        let userRole = await db.Role.findOne({code: 111});
        await db.UserRole.create({
            role: userRole._id,
            user: id
        })
        let roles = [userRole];
        let {userToken, lockToken} = generateToken(id, viewname, email, profileImg, roles);
        return res.status(200).json({id, viewname, profileImg, email, userToken, lockToken});
    }catch(err){
        // error code for validation fails
        return next({
            status: 400,
            message: err.code === 11000 ? "Sorry, that email/password is taken or invalid" : err.message
        })
    }
}

exports.logIn = async(req, res, next) => {
    try{
        let user = await db.User.findOne({email: req.body.email});
        let {id, viewname, email, profileImg} = user;
        let match = await user.comparePassword(req.body.password);
        if(match){
            let userRoles = await db.UserRole.find({user: id}).populate("role").exec();
            let roles = userRoles.map(user => user.role);
            let {userToken, lockToken} = generateToken(id, viewname, email, profileImg, roles);
            return res.status(200).json({id, viewname, profileImg, email, userToken, lockToken});
        } else {
            return next({
                status: 400,
                message: "Invalid email/password."
            })
        }
    }catch(err){
        return next({
            status: 400,
            message: "Invalid email/password."
        })
    }
}
