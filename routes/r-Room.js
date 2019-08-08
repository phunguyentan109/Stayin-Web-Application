const express = require("express");
const router = express.Router({mergeParams: true});
const hdl = require("../handlers");
const mw = require("../middleware");


router.route("/")
.get(hdl.Room.getAll)
.post(mw.User.isCorrect, mw.User.isPermit ,hdl.Room.create);

router.route("/:room_id")
.delete(mw.User.isCorrect, mw.User.isPermit, hdl.Room.remove)
.put(mw.User.isCorrect, mw.User.isPermit, hdl.Room.update);

module.exports = router;
