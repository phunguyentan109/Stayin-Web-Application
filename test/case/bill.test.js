const expect = require("expect.js");
const prc = require("../prc");
const {owner, bill, room, ...sample} = require("../sample");

describe("BILL HANDLER TESTS", function(){

    before(async function(){
        await sample.clear();
        logUser = await prc.User.logIn(owner);

        authorization = `Bearer ${logUser.token}`;

        createdBill = "";

    })

    describe("1. Create new Bill", function(){

        it("Create bill with user account", async function(){
            let rs = await prc.Bill.create(logUser._id, bill, authorization);
            createdBill = rs;

            expect(rs).to.have.keys("electric", "wifi", "water", "house", "extra", "_id");
            expect(rs.electric).to.be(bill.electric);
            expect(rs.wifi).to.be(bill.wifi);
            expect(rs.water).to.be(bill.water);
            expect(rs.house).to.be(bill.house);
            expect(rs.extra).to.be(bill.extra);
        })

        it("Should create new bill with fake user id account", async function(){
            let rs = await prc.Bill.create("123", bill, authorization);

            expect(rs).to.have.keys("status", "message");
        });
    })

    describe("2. View all bill", function(){
        it("Display all bill successfully", async function(){
            let rs = await prc.Bill.get(logUser._id);

            expect(rs).to.be.an("array");
        })
    })

    describe("3. Update bill", function(){
        it("Update bill successfully", async function(){
            let rs = await prc.Bill.update(logUser._id, createdBill._id, bill, authorization);

            expect(rs).to.have.keys("electric", "wifi", "water", "house", "extra");
            expect(rs.electric).to.be(bill.electric);
            expect(rs.wifi).to.be(bill.wifi);
            expect(rs.water).to.be(bill.water);
            expect(rs.house).to.be(bill.house);
            expect(rs.extra).to.be(bill.extra);
            expect(rs._id).to.be(createdBill._id);
        })

        it("Update bill with fake user id account", async function(){
            let rs = await prc.Bill.update("123", createdBill._id, bill, authorization);

            expect(rs).to.have.keys("status", "message");
        })
    })

    describe("4. Delete bill", function(){
        it("Delete bill successfully", async function(){
            let rs = await prc.Bill.remove(logUser._id, createdBill._id, authorization);

            expect(rs._id).to.be(createdBill._id);
        })

        it("Delete bill with fake user id account", async function(){
            let rs = await prc.Bill.remove("123", createdBill._id, authorization);

            expect(rs).to.have.keys("status", "message");
        })
    })

    after(async function(){
        await sample.clear();
    })
})
