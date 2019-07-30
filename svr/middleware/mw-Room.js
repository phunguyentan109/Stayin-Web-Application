const db = require("../models");
const mw = require("./index");
const ut = require("../ut");

exports.needPrice = async(req, res, next) => {
    try{
        const {room} = req.body;
        let isExist = await ut.isRoleExist(220, req.params.user_id);
        if(!isExist){
            const {price} = req.body;
            req.body = room;
            res.locals.price = price;
            return await mw.Price.init(req, res, next);
        }
        req.body = room;
        return next();
    } catch(err){
        return next(err);
    }
}
