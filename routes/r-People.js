const express = require("express");
const router = express.Router();
const hdl = require("../handlers");

router.route("/").get(hdl.People.get);
router.route("/:people_id").delete(hdl.People.remove);

module.exports = router;
