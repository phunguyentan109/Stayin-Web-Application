const db = require("../models");

exports.getAll = async(req, res, next) => {
    try{
        let prices = await db.Price.find();
        return res.status(200).json(prices);
    } catch(err){
        return next(err);
    }
}

exports.create = async(req, res, next) => {
    try {
        let newPrice = await db.Price.create(req.body);
        return res.status(200).json(newPrice);
    } catch (err) {
        return next(err);
    }
}

exports.remove = async(req, res, next) => {
    try {
        let foundPrice = await db.Price.findById({_id: req.params.price_id});
        if(foundPrice) foundPrice.remove();
        return res.status(200).json(foundPrice);
    } catch(err) {
        return next(err);
    }
}

exports.update  = async(req, res, next) => {
    try {
        let updatedPrice = await db.Price.findById(req.params.price_id);
        let {electric, wifi, water, house, extra} = req.body;

        updatedPrice.electric = electric;
        updatedPrice.wifi = wifi;
        updatedPrice.water = water;
        updatedPrice.house = house;
        updatedPrice.extra = extra;
        await updatedPrice.save();
        return res.status(200).json(updatedPrice);
    } catch(err) {
        return next(err);
    }
}
