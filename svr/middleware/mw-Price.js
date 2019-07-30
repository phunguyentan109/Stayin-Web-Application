const db = require("../models");
const ut = require("../ut");

exports.init = async(req, res, next) => {
    try{
        let price = res.locals.price || req.body;
        let createdPrice = await db.Price.create(price);
        createdPrice.user = req.params.user_id;
        await createdPrice.save();
        await ut.pushIdToCol("User", "price", req.params.user_id, createdPrice._id);
        res.locals.createdPrice = createdPrice;
        return next();
    }catch(err){
        return next({
            status: 400,
            message: err.code === 11000 ? "The entered data of price is incorrect or invalid." : err.message
        });
    }
}
