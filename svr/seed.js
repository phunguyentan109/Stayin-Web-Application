const db = require("./models");

const roles = [
    {
        type: "FULL CONTROL",
        code: "000",
        desc: ""
    },
    {
        type: "PEOPLE CONTROL",
        code: "001",
        desc: ""
    }
];

async function createRole(){
    try {
        let list = await db.Role.find();
        if(list.length === 0){
            for(let role of roles){
                await db.Role.create(role);
            }
            return console.log("[ ROLE CREATED ]");
        }
        return console.log("[ ROLE LOADED ]");
    } catch(err) {
        console.log(err);
    }
}

module.exports = createRole;
