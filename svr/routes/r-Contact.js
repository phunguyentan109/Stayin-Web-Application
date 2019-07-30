const express = require("express");
const hdl = require("../handlers");
const mw = require("../middleware");
const router = express.Router({mergeParams: true});

router.route("/").post(mw.Contact.checkType, hdl.Contact.create);

router.route("/:contact_id")
.delete(hdl.Contact.remove)
.put(hdl.Contact.update);

router.route("/invites").get(hdl.Contact.getInvites);
router.route("/requests").get(hdl.Contact.getRequests);

module.exports = router;
