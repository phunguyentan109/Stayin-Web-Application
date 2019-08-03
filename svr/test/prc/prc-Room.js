const mock = require("node-mocks-http");
const hdl = require("../../handlers");
const prc = require("../prc");
const mw = require("../../middleware");

exports.create = async(user_id, room) => {
    const {req, res} = mock.createMocks({
        url: `/api/user/${user_id}/rooms`,
        method: "POST",
        params: {user_id},
        body: room
    });
    return await prc.exec(req, res, hdl.Room.create);
}

exports.getAll = async(user_id) => {
    const {req, res} = mock.createMocks({
        url: `/api/user/${user_id}/rooms`,
        method: "GET",
        params: {user_id}
    })
    return await prc.exec(req, res, hdl.Room.getAll);
}

exports.remove = async(user_id, room_id) => {
    const {req, res} = mock.createMocks({
        url: `/api/user/${user_id}/rooms/${room_id}`,
        method: "DELETE",
        params: {user_id, room_id}
    });
    return await prc.exec(req, res, hdl.Room.remove);
}

exports.update = async(user_id, room_id, room) => {
    const {req, res} = mock.createMocks({
        url: `/api/user/${user_id}/rooms/${room_id}`,
        method: "PUT",
        params: {user_id, room_id},
        body: room
    });
    return await prc.exec(req, res, hdl.Room.update);
}
