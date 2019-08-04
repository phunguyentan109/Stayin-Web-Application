const express = require("express");
const hdl = require("../handlers");
const mw = require("../middleware");
const router = express.Router({mergeParams: true});

router.route("/signup").post(hdl.User.signUp);
router.route("/login").post(hdl.User.logIn);

router.route("/:user_id").get(hdl.User.getOne);

router.use("/:user_id/rooms", mw.User.isLogin, mw.User.isCorrect, require("./r-Room"));
router.use("/:user_id/prices", mw.User.isLogin, mw.User.isCorrect, require("./r-Price"));

module.exports = router;
