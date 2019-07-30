const expect = require("expect.js");
const seed = require("../seed");
const prc = require("../prc");

describe("MANAGE ROOM TESTS", function(){

    before(async function(){
        await seed.clear();

        user = await prc.User.signUp({...seed.user, viewname: "test"});
        token = `Bearer ${user.userToken}`;
        room_id = "";

        prc.mwUser.isLogin(token);
        prc.mwUser.isCorrect(token, user.id);
    })

    describe("1. Create new room", function(){
        it("should begin the hiring service successfully (IT)", async function(){
            let rs = await prc.Room.create(user.id, seed.room, seed.price);
            expect(rs).to.have.key("_id", "number", "price");
        })

        it("should create new room successfully (already service)", async function(){
            let rs = await prc.Room.create(user.id, {...seed.room, number: 1});
            expect(rs).to.have.key("_id", "number", "price");
        })

        it("should not create new room with the same number", async function(){
            let rs = await prc.Room.create(user.id, seed.room);
            expect(rs).to.have.key("status", "message");
            expect(rs.message).to.be("The number is already used!");
        })
    })

    describe("2. Get all the room", function(){
        it("should get all the room data successfully", async function(){
            let rs = await prc.Room.getAll(user.id);
            room_id = rs[0]._id;
            expect(rs).to.be.an("array");
            expect(rs.length).to.be(2);
        })
    })

    describe("3. Update the room information", function(){
        it("should update the room information successfully!", async function(){
            let rs = await prc.Room.update(user.id, room_id, {...seed.room, number: 2});
            expect(rs).to.have.key("_id", "number", "price");
            expect(rs._id).to.be(room_id);
            expect(rs.number).to.be(2);
        })

        it("should not update the room with an exist room number", async function(){
            let rs = await prc.Room.update(user.id, room_id, {...seed.room, number: 1});
            expect(rs).to.have.key("status", "message");
            expect(rs.message).to.be("The number is already used!");
        })
    })

    describe("4. Delete the room's information", function(){
        it("should delete the room data successfully!", async function(){
            let rs = await prc.Room.remove(user.id, room_id);
            expect(rs._id).to.be(room_id);
        })
    })

    after(async function(){
        await seed.clear();
    })

})
