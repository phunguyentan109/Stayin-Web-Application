const expect = require("expect.js");
const seed = require("../seed");
const prc = require("../prc");

describe("MANAGE PRICE TESTS", function(){

    before(async function(){
        await seed.clear();

        user = await prc.User.signUp({...seed.user, viewname: "test"});
        token = `Bearer ${user.userToken}`;
        price_id = ""
    })

    describe("1. Add new price (IT)", function(){
        it("should add new price successfully", async function(){
            let rs = await prc.Price.create(user.id, seed.price);
            expect(rs).to.have.key("name", "electricity", "wifi", "water", "rent");
            expect(rs.user).to.be(user.id);
        })

        it("should not add the price has the same name", async function(){
            let rs = await prc.Price.create(user.id, seed.price);
            expect(rs).to.have.key("status", "message");
        })
    })

    describe("2. Get all the price", function(){
        it("should get all the price successfully", async function(){
            let rs = await prc.Price.getAll(user.id);
            price_id = rs[0]._id;
            expect(rs).to.be.an("array");
            expect(rs.length).to.be(1);
        })
    })

    describe("3. Update the price", function(){
        it("should update the price successfully", async function(){
            let price = {name: "priceTest", electricity: 90, rent: 1500, water: 20, wifi: 20};
            let rs = await prc.Price.update(user.id, price_id, price);
            expect(rs).to.have.key("name", "electricity", "rent", "water", "wifi");
            expect(rs.electricity).to.be(90);
            expect(rs.rent).to.be(1500);
            expect(rs.water).to.be(20);
            expect(rs.wifi).to.be(20);
            expect(rs.name).to.be("priceTest");
        })
    })

    describe("4. Remove the price", function(){
        it("should remove the price successfully", async function(){
            let rs = await prc.Price.remove(user.id, price_id);
            expect(rs._id).to.be(price_id);
        })
    })

    after(async function(){
        await seed.clear();
    })

})
