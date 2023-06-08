const express = require("express");
const router = express.Router();
const signController = require("../controllers/signController");
router
  .post("/signin", signController.signIn)
  .post("/signup", signController.signUp);

module.exports = router;
