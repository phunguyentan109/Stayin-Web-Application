const db = require("../models");

exports.getAll = async(req, res, next) => {
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
        let updatedPrice = await db.Price.findByIdAndUpdate(req.params.price_id, req.body, {new: true});
        return res.status(200).json(updatedPrice);
    } catch(err) {
        return next(err);
    }
}
