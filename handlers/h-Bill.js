const db = require("../models");

exports.get = async(req, res, next) => {
    try{
        let bills = await db.Bill.find();
        return res.status(200).json(bills);
    } catch(err){
        return next(err);
    }
}

exports.create = async(req, res, next) => {
    try {
        let newBill = await db.Bill.create(req.body);
        return res.status(200).json(newBill);
    } catch (err) {
        return next(err);
    }
}

exports.remove = async(req, res, next) => {
    try {
        let foundBill = await db.Bill.findById({_id: req.params.bill_id});
        if(foundBill) foundBill.remove();
        return res.status(200).json(foundBill);
    } catch(err) {
        return next(err);
    }
}

exports.update  = async(req, res, next) => {
    try {
        let updatedBill = await db.Bill.findById(req.params.bill_id);
        let {electric, wifi, water, house, extra} = req.body;

        updatedBill.electric = electric;
        updatedBill.water = water;
        updatedBill.house = house;
        updatedBill.wifi = wifi;
        updatedBill.extra = extra;
        await updatedBill.save();
        return res.status(200).json(updatedBill);
    } catch(err) {
        return next(err);
    }
}
