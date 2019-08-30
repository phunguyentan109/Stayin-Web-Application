const db = require("../models");
const moment = require("moment");
const {pushId} = require("../utils/dbSupport");

exports.get = async(req, res, next) => {
    try{
        let bills = await db.Bill.find();
        return res.status(200).json(bills);
    } catch(err){
        return next(err);
    }
}

exports.getOne = async(req, res, next) => {
    try{
        let bill = await db.Bill.findById(req.params.bill_id);
        return res.status(200).json(bill);
    } catch(err){
        return next(err);
    }
}

exports.create = async(req, res, next) => {
    try {
        // Get this month entered data
        let {amount} = req.body;
        let {room_id} = req.params;
        // find previous bill
        let room = await db.Room.findById(room_id).populate("bill_id").populate("price_id").exec();
        let price = room.price_id;
        let prevAmount = 0;
        if(room.bill_id && room.bill_id.length > 0) {
            let bills = room.bill_id;
            let lastDate = moment.max(bills.map(bill => moment(bill.createdAt)));
            let prevBill = bills.filter(b => moment(b.createdAt).isSame(lastDate))[0];
            prevAmount = prevBill.electric.amount;
        }

        // calculate the bill with price and create
        let bill = {
            electric: {
                amount: amount,
                cost: (amount - prevAmount) * price.electric
            },
            water: price.water * room.people_id.length,
            house: price.house + (price.extra * (room.people_id.length - 1)),
            wifi: price.wifi
        }
        let newBill = await db.Bill.create(bill);

        // save bill_id to room
        await pushId("Room", room_id, "bill_id", newBill._id);
        // save room_id to bill
        newBill.room_id = req.params.room_id;
        await newBill.save();

        return res.status(200).json(newBill);
    } catch (err) {
        return next(err);
    }
}

exports.remove = async(req, res, next) => {
    try {
        let foundBill = await db.Bill.findById(req.params.bill_id);
        if(foundBill) await foundBill.remove();
        return res.status(200).json(foundBill);
    } catch(err) {
        return next(err);
    }
}

exports.update  = async(req, res, next) => {
    try {
        const {bill_id, room_id} = req.params;
        let bill = await db.Bill.findById(bill_id);

        // get room's price
        let room = await db.Room.findById(room_id).populate("price_id").exec();
        let {electric, water, extra, house, wifi} = room.price_id;

        // get last month used electric amount
        let prevAmount = bill.electric.amount - (bill.electric.cost / electric);

        // update bill data
        let {amount} = req.body;
        bill.electric = {
            amount: amount,
            cost: (amount - prevAmount) * electric
        };
        if(bill.water === 0) {
            bill.water = water * room.people_id.length,
            bill.house = house + (extra * (room.people_id.length - 1)),
            bill.wifi = wifi;
        }
        await bill.save();

        return res.status(200).json(bill);
    } catch(err) {
        return next(err);
    }
}

exports.updatePay  = async(req, res, next) => {
    try {
        const {bill_id, room_id} = req.params;
        let bill = await db.Bill.findById(bill_id);

        // update pay
        let {pay} = req.body;
        bill.pay = pay;

        await bill.save();

        return res.status(200).json(bill);
    } catch(err) {
        return next(err);
    }
}
