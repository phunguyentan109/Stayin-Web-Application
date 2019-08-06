const jwt = require("jsonwebtoken");

exports.generateToken = (id, viewname, email, profileImg, roles) => {
    let userToken = jwt.sign({id, viewname, profileImg, roles}, process.env.SECRET);
    let lockToken = jwt.sign({viewname, email, profileImg}, process.env.SECRET);
    return {userToken, lockToken};
}

exports.isLogin = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, process.env.SECRET, (err, payload) => {
            if(payload){
                return next();
            } else {
                return next({status: 401, message: "Please login first!"});
            }
        })
    } catch(err) {
        return next({status: 401, message: "Please login first!"});
    }
}

exports.isCorrect = async(req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const payload = jwt.verify(token, process.env.SECRET);
        if(payload && payload._id === req.params.user_id) return next();
        return next({status: 401, message: "Unauthorized!"});
    } catch(err) {
        return next(err);
    }
}

exports.isPermit = async(req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const payload = await jwt.verify(token, process.env.SECRET);
        return payload.role.code === "000" ? next(): next({status: 405, message: "Action is not permitted!"});
    } catch(err) {
        return next(err);
    }
}