const mongoose = require("mongoose");
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);
mongoose.Promise = Promise;
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports.User = require("./m-User");
module.exports.Room = require("./m-Room");
module.exports.Price = require("./m-Price");
module.exports.Bill = require("./m-Bill");
module.exports.Role = require("./m-Role");
module.exports.People = require("./m-People");
module.exports.UserRole = require("./m-UserRole");
