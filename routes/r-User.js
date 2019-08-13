const express = require("express");
const hdl = require("../handlers");
const mw = require("../middleware");
const router = express.Router({mergeParams: true});

router.route("/signup").post(hdl.User.signUp);
router.route("/login").post(hdl.User.logIn);

router.route("/:user_id").get(hdl.User.getOne);
router.route("/:user_id/activate").put(hdl.User.activate);

router.use("/:user_id/rooms", mw.User.isLogin, require("./r-Room"));
router.use("/:user_id/prices", mw.User.isLogin, require("./r-Price"));
router.use("/:user_id/bills", mw.User.isLogin, require("./r-Bill"));
router.use("/:user_id/people", mw.User.isLogin, require("./r-People"));

module.exports = router;
