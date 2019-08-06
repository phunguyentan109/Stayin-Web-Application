const express = require("express");
const router = express.Router({mergeParams: true});
const hdl = require("../handlers");

router.route("/")
.get(hdl.Room.getAll)
.post(hdl.Room.create);

router.route("/:room_id")
.delete(hdl.Room.remove)
.put(hdl.Room.update);

module.exports = router;
