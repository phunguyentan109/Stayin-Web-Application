require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mw = require("./middleware");
const hdl = require("./handlers");
require("./seed")();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.use("/api/user", require("./routes/r-User"));

app.use((req, res, next) => {
    let err = new Error("Route not found!");
    err.status = 404;
    next(err);
});

app.use(hdl.Error.handle);

app.listen(process.env.PORT, () => console.log(`[ SERVER IS STARTED ON PORT ${process.env.PORT} ]`));