require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mw = require("./middleware");
const hdl = require("./handlers");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

const routes = require("./routes");
app.use("/api/user", routes.User);
app.use("/api/user/:user_id", mw.User.isLogin, mw.User.isCorrect, routes.User);

app.use((req, res, next) => {
    let err = new Error("Route not found!");
    err.status = 404;
    next(err);
});

app.use(hdl.Error.handle);

app.listen(process.env.PORT, () => console.log(`[ SERVER IS STARTED ON PORT ${process.env.PORT} ]`));
