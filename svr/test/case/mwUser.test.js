const expect = require("expect.js");
const seed = require("../seed");
const prc = require("../prc");

describe("USER MIDDLEWARE TESTS", function(){

    before(async function(){
        await seed.clear();

        user = await prc.User.signUp({...seed.user, viewname: "test"});
        token = `Bearer ${user.userToken}`;
    })

    describe("1. isLogin middleware", function(){
        it("should verify the correct header authorization successfully", function(){
            let rs = prc.mwUser.isLogin(token);
            expect(rs).to.not.have.key("status", "message");
            expect(rs).to.be.empty();
        })

        it("should forbid the incorrect/invalid authorization header", function(){
            let rs = prc.mwUser.isLogin("sadadadff");
            expect(rs).to.have.key("status", "message");
        })
    })

    describe("2. isCorrectUser middleware", function(){
        it("should get the payload and compare id successfully", function(){
            let rs = prc.mwUser.isCorrect(token, user.id);
            expect(rs).to.not.have.key("status", "message");
            expect(rs).to.be.empty();
        })

        it("should forbid if get the payload but the id is not matched", function(){
            let rs = prc.mwUser.isCorrect(token, "asdasd");
            expect(rs).to.have.key("status", "message");
        })
    })

    after(async function(){
        await seed.clear();
    })
})
