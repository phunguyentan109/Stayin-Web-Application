// const expect = require("expect.js");
// const seed = require("../seed");
// const prc = require("../prc");
//
// describe("CONTACT HANDLERS TEST", function(){
//
//     before(async function(){
//         await seed.clear();
//
//         // signup owner account
//         user = await prc.User.signUp({...seed.user, viewname: "test"});
//         // authentication for owner
//         userToken = `Bearer ${user.userToken}`;
//         prc.mwUser.isLogin(userToken);
//         prc.mwUser.isCorrect(userToken, user.id);
// 
//         // signup guest account
//         guest = await prc.User.signUp({...seed.guest, viewname: "guest"});
//         // authentication for guest
//         guestToken = `Bearer ${guest.userToken}`;
//         prc.mwUser.isLogin(guestToken);
//         prc.mwUser.isCorrect(guestToken, guest.id);
//
//         // owner begin service
//         await prc.Room.create(user.id, seed.room, seed.price);
//     })
//
//     describe("1. Create new contact", function(){
//         it("should succeed to create new contact (invite)", async function(){
//
//         });
//
//         it("should succeed to create new contact (request)", async function(){
//
//         });
//
//         it("should fail to create new contact (invite) if user do not own rooms", async function(){
//
//         });
//     })
//
//     describe("2. View all the contact", function(){
//         it("should succeed to view all the invitations", async function(){
//
//         })
//
//         it("should succeed to view all the requests", async function(){
//
//         })
//     })
//
//     after(async function(){
//         await seed.clear();
//     })
//
// })
