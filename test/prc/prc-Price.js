const mock = require("node-mocks-http");
const hdl = require("../../handlers");
const prc = require("../prc");
const mw = require("../../middleware")

exports.create = async(user_id, price) => {
    const {req, res} = mock.createMocks({
        method: "POST",
        url: `/user/${user_id}/prices`,
        params: {user_id},
        body: price
    });
    return await prc.exec(req, res, mw.Price.init, hdl.Price.create);
}

exports.getAll = async(user_id) => {
    const {req, res} = mock.createMocks({
        method: "GET",
        url: `/user/${user_id}/prices`,
        params: {user_id}
    });
    return await prc.exec(req, res, hdl.Price.getAll);
}

exports.update = async(user_id, price_id, price) => {
    const {req, res} = mock.createMocks({
        method: "PUT",
        url: `/user/${user_id}/prices/${price_id}`,
        params: {user_id, price_id},
        body: price
    });
    return await prc.exec(req, res, hdl.Price.update);
}

exports.remove = async(user_id, price_id) => {
    const {req, res} = mock.createMocks({
        method: "DELETE",
        url: `/user/${user_id}/prices/${price_id}`,
        params: {user_id, price_id}
    });
    return await prc.exec(req, res, hdl.Price.remove);
}
