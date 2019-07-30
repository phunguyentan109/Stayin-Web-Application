const expect = require("expect.js");
const prc = require("../prc");
const seed = require("../seed");

describe("AUTHENTICATION TESTS", function() {

    before(async function(){
        await seed.clear();
    })

    describe("1. Register new user", function() {
        before(function(){
            user = {...seed.user, viewname: "test"}
        })

        it("should register new user", async function(){
            let rs = await prc.User.signUp(user);
            expect(rs).to.have.key('id', 'viewname', 'profileImg', 'email', "userToken", "lockToken");
        })

        it("should not register new user with the same email", async function(){
            let rs = await prc.User.signUp(user);
            expect(rs).to.have.key("status", "message");
        })
    })

    describe("2. Login available user", function(){
        it("should login user successfully", async function(){
            let rs = await prc.User.logIn(seed.user);
            expect(rs).to.have.key('id', 'viewname', 'profileImg', 'email', "userToken", "lockToken");
        })

        it("should not login user with empty email", async function(){
            user = {...seed.user, email: ""};
            let rs = await prc.User.logIn(user);
            expect(rs).to.have.key("status", "message");
        })

        it("should not login user with empty password", async function(){
            user = {...seed.user, password: ""};
            let rs = await prc.User.logIn(user);
            expect(rs).to.have.key("status", "message");
        })

        it("should not login user with wrong password", async function(){
            user = {...seed.user, password: "abc"};
            let rs = await prc.User.logIn(user);
            expect(rs).to.have.key("status", "message");
        })
    })

    after(async function(){
        await seed.clear();
    })

})
