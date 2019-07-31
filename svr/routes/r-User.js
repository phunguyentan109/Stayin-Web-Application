const express = require("express");
const hdl = require("../handlers");
const router = express.Router({mergeParams: true});

router.route("/signup").post(hdl.User.signUp);
router.route("/login").post(hdl.User.logIn);

router.use("/rooms", require("./r-Room"));
router.use("/prices", require("./r-Price"));

module.exports = router;
