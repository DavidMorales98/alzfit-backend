const express = require("express");
const router = express.Router();
const testController = require("../controllers/testController")

router
    .get("/tests",testController.getTests)
    .get("/test",testController.getTest)
    .post("/test",testController.evaluateTest);

module.exports = router;