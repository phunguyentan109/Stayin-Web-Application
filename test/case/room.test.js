const expect = require("expect.js");
const prc = require("../prc");
const {user, room, ...seed} = require("../seed");

describe("ROOM HANDLER TESTS", function(){

    before(async function(){
        await seed.clear();
        logUser = await prc.User.logIn({...user});

        authorization = `Bearer ${logUser.token}`;

        //createdRoom
        createdRoom = "";
    })

    describe("1. Create new room", function(){
        
        it("Create room with user account", async function(){
            let rs = await prc.Room.create(logUser._id, room, authorization);

            expect(rs).to.have.keys("name", "_id");
            expect(rs.name).to.be(room.name);
        })

        it("should create new room with fake user id account", async function(){
            let rs = await prc.Room.create("123", {name: "name"}, authorization);

            expect(rs).to.have.keys("status", "message");
        })
    })

    // describe("2. View all Room", function(){
    //     it("should display all room successfully", async function(){
    //         let rs = await prc.Room.getAll(logUser._id);

    //         expect(rs).to.be.an("array");
    //     })
    // })

    // describe("3. Update room", function(){

    //     it("should update successfully room", async function(){
    //         let rs = await prc.Room.update(logUser._id, createdRoom._id, room);

    //         expect(rs).to.have.keys("name");
    //         expect(rs.name).to.be(room.name);
    //         expect(rs._id).to.be(createdRoom._id);
    //     })

    //     it("should update room with fake user id account", async function(){
    //         let rs = await prc.Room.update( logUser._id, "123", room);

    //         expect(rs).to.have.keys("message");
    //     })

    // })

    // describe("4. Delete room", function(){

    //     it("should delete room successfully", async function(){
    //         let rs = await prc.Room.remove(logUser._id, {room_id: createdRoom._id});

    //         expect(rs._id).to.be(createdRoom._id);
    //     })

    //     it("should delete room with fake user id account", async function(){
    //         let rs = await prc.Room.remove(logUser._id, "124");

    //         expect(rs).to.have.keys("message");
    //     })

    // })

    after(async function(){
        await seed.clear();
    })

})