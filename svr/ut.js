const db = require("./models");

exports.saveIdToCol = async(colName, fieldName, findId, saveId) => {
    let foundDoc = await db[colName].findById(findId);
    if(foundDoc){
        foundDoc[fieldName] = saveId;
        foundDoc.save();
    }
    return foundDoc;
}

exports.pushIdToCol = async(colName, fieldName, findId, saveId) => {
    let foundDoc = await db[colName].findById(findId);
    if(foundDoc){
        foundDoc[fieldName].push(saveId);
        foundDoc.save();
    }
    return foundDoc;
}

exports.isRoleExist = async(code, user_id) => {
    let roles = await db.UserRole.find({user: user_id}).populate("role").exec();
    return roles.some(doc => doc.role.code === code);
}

exports.addRoleToUser = async(code, user_id) => {
    try{
        let isExist = await exports.isRoleExist(code, user_id);
        if(!isExist){
            let foundRole = await db.Role.findOne({code: code});
            await db.UserRole.create({user: user_id, role: foundRole._id});
        }
    } catch(err){
        console.log(err);
    }
}
