const expect = require("expect.js");
const prc = require("../prc");
const seed = require("../seed");

describe("CONTACT MIDDLEWARE TESTS", function(){
    before(async function(){
        await seed.clear();
        user = await prc.User.signUp({...seed.user, viewname: "test"});
        guest = await prc.User.signUp({...seed.guest, viewname: "guest"});
        await prc.Room.create(user.id, seed.room, seed.price);
    })

    describe("1. checkType middleware", function(){

        it("should allow user who own service to send invitation", async function(){
            let rs = await prc.mwContact.checkType(user.id, seed.invite);
            expect(rs).to.not.have.key("message", "status");
        })

        it("should not allow user who do not own service to send invitation", async function(){
            let rs = await prc.mwContact.checkType(guest.id, seed.invite);
            expect(rs).to.have.key("message", "status");
        })

        it("should allow user who own service to send request", async function(){
            let rs = await prc.mwContact.checkType(guest.id, seed.request);
            expect(rs).to.not.have.key("message", "status");
        })

    })

    after(async function(){
        await seed.clear();
    })
})
