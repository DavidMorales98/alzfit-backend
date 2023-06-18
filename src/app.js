const express = require("express");
const app = express();
const cors = require("cors");
//const {connection} = require("./database/mongodb")

//connection();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1",require("./routes/user"))
app.use("/api/v1",require("./routes/user"))
app.use("/api/v1",require("./routes/test"))
app.use("/api/v1",require("./routes/sign"))
app.use("/api/v1",require("./routes/info"))


module.exports = app;
