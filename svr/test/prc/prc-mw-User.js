const mock = require("node-mocks-http");
const mw = require("../../middleware");

exports.isLogin = function(tokenHeader){
    let {req, res} = mock.createMocks({
        path: "../../../middleware/mw-User",
        headers: {
            authorization: tokenHeader
        }
    });
    mw.User.isLogin(req, res, err => res.json(err));
    return !res._getData() ? res._getData() : JSON.parse(res._getData())
}

exports.isCorrect = function(tokenHeader, user_id){
    let {req, res} = mock.createMocks({
        path: "../../../middleware/mw-User",
        headers: {
            authorization: tokenHeader
        },
        params: {user_id}
    });
    mw.User.isCorrect(req, res, err => res.json(err));
    return !res._getData() ? res._getData() : JSON.parse(res._getData())
}
