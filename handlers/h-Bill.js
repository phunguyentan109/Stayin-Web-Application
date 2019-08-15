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
                cost: amount - prevAmount * price.electric
            },
            water: price.water * room.people_id.length,
            house: price.house + (price.extra * (room.people_id.length - 1)),
            wifi: price.wifi
        }
        let newBill = await db.Bill.create(bill);

        // save bill_id to room
        await pushId("Room", room_id, "bill_id", newBill._id);
        return res.status(200).json(newBill);
    } catch (err) {
        console.log(err);
        return next(err);
    }
}

exports.remove = async(req, res, next) => {
    try {
        let foundBill = await db.Bill.findById(req.params.bill_id);
        if(foundBill) foundBill.remove();
        return res.status(200).json(foundBill);
    } catch(err) {
        return next(err);
    }
}

exports.update  = async(req, res, next) => {
    try {
        let updatedBill = await db.Bill.findById(req.params.bill_id);
        let {amount, inContract} = req.body;

        updatedBill.amount = amount;
        updatedBill.inContract = inContract;
        await updatedBill.save();
        return res.status(200).json(updatedBill);
    } catch(err) {
        return next(err);
    }
}
