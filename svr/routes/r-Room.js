const express = require("express");
const router = express.Router({mergeParams: true});
const hdl = require("../handlers");
const mw = require("../middleware");

router.route("/")
.get(hdl.Room.getAll)
.post(mw.Room.needPrice, hdl.Room.create);

router.route("/:room_id")
.delete(hdl.Room.remove)
.put(hdl.Room.update);

module.exports = router;
