const expect = require("expect.js");
const mocks = require("node-mocks-http");
const prc = require("../prc");
const mw = require("../../middleware");

exports.checkType = async(user_id, contact) => {
    const {req, res} = mocks.createMocks({
        path: "../../middleware/mw-Contact",
        params: { user_id },
        body: contact
    });
    return await prc.exec(req, res, mw.Contact.checkType);
}
