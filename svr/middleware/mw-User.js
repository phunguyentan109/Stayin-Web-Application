require("dotenv").load()
const jwt = require("jsonwebtoken");

exports.generateToken = (id, viewname, email, profileImg, roles) => {
    let userToken = jwt.sign({id, viewname, profileImg, roles}, process.env.SECRET);
    let lockToken = jwt.sign({viewname, email, profileImg}, process.env.SECRET);
    return {userToken, lockToken};
}

exports.isLogin = (req, res, next) => {
    try{
        const token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, process.env.SECRET, (err, payload) => {
            if(payload){
                return next();
            } else {
                return next({status: 401, message: "Please login first!"});
            }
        })
    }catch(err){
        return next({status: 401, message: "Please login first!"});
    }
}

exports.isCorrect = (req, res, next) => {
    try{
        const token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, process.env.SECRET, function(err, payload){
            if(payload && payload.id === req.params.user_id){
                return next();
            } else {
                return next({status: 401, message: "Unauthorized!"});
            }
        })
    }catch(err){
        return next({status: 401, message: err.message});
    }
}
