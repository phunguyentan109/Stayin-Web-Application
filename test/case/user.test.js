const expect = require("expect.js");
const prc = require("../prc");
const {user, ...sample} = require("../seed");

describe("USER HANDLER TESTS", function(){

    before(async function(){
        await sample.clear();
    })

    describe("1. Sign up user account", function(){

        it("Sign up user successfully!", async function(){
            let rs = await prc.User.create(user);

            expect(rs).to.have.keys("_id", "viewname", "avatar", "email", "role", "active", "token");
            expect(rs.email).to.be(user.email);
            expect(rs.active).to.be(false);
            expect(rs.avatar).to.have.keys("link");
        })

    })

    describe("2. Sign in user account", function(){

        // it("should create new room with fake user id account", async function(){
        //     let rs = await prc.Room.create("123", {name: "name"}, authorization);
        //
        //     expect(rs).to.have.keys("status", "message");
        // })

    })

    after(async function(){
        await sample.clear();
    })

})
