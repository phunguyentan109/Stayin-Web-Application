const express = require("express");
const router = express.Router({mergeParams: true});
const hdl = require("../handlers");
const mw = require("../middleware");

router.route("/")
.get(hdl.Price.getAll)
.post(mw.Price.init, hdl.Price.create);

router.route("/:price_id")
.delete(hdl.Price.remove)
.put(hdl.Price.update);

module.exports = router;
