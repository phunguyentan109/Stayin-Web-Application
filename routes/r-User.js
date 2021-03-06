const express = require("express");
const hdl = require("../handlers");
const mw = require("../middleware");
const router = express.Router({mergeParams: true});

router.route("/").get(hdl.User.get);
router.route("/getAll").get(hdl.User.getAll);

router.route("/signup").post(mw.User.generateAvatar, hdl.User.signUp);
router.route("/login").post(hdl.User.logIn);

router.route("/:user_id")
.get(hdl.User.getOne)
.delete(hdl.User.remove)
.put(hdl.User.update);

router.route("/:user_id/activate").put(hdl.User.activate);
router.route("/:user_id/password").put(hdl.User.updatePassword);
router.route("/:user_id/contact").post(hdl.User.contact);
router.route("/:user_id/amount").post(hdl.User.amountElectric);
router.route("/:user_id/userRoom").get(hdl.User.userRoom);

router.use("/:user_id/rooms", mw.User.isLogin, require("./r-Room"));
router.use("/:user_id/price", mw.User.isLogin, require("./r-Price"));
router.use("/:user_id/people", mw.User.isLogin, require("./r-People"));

module.exports = router;
