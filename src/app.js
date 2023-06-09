const express = require("express");
const app = express();
const cors = require("cors");
const routesUser = require("./routes/user")
const routesInfo = require("./routes/info")
const routesTest = require("./routes/test")
const routesSign = require("./routes/sign")
const {connection} = require("./database/mongodb")
connection();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routesInfo)
app.use(routesUser)
app.use(routesTest)
app.use(routesSign)


module.exports = app;
