const db = require("../models");

exports.get = async(req, res, next) => {
    try{
        let prices = await db.Price.find({user: req.params.user_id});
        return res.status(200).json(prices);
    } catch(err){
        return next(err);
    }
}

exports.create = (req, res, next) => {
    const {createdPrice} = res.locals;
    return res.status(200).json(createdPrice);
}

exports.remove = async(req, res, next) => {
    try {
        let foundPrice = await db.Price.findOne({_id: req.params.price_id});
        if(foundPrice) foundPrice.remove();
        return res.status(200).json(foundPrice);
    } catch(err) {
        return next(err);
    }
}

exports.update  = async(req, res, next) => {
    try {
        let updatedPrice = await db.Price.findById(req.params.price_id);
        let {electric, wifi, water, house, extra, duration} = req.body;

        updatedPrice.electric = electric;
        updatedPrice.wifi = wifi;
        updatedPrice.water = water;
        updatedPrice.house = house;
        updatedPrice.extra = extra;
        updatedPrice.duration = duration;
        await updatedPrice.save();
        return res.status(200).json(updatedPrice);
    } catch(err) {
        return next(err);
    }
}
