const express = require("express");
const router = express.Router();
const infoController = require("../controllers/infoController");
const {auth} = require("../middlewares/auth")

router.get("/info", auth,infoController.getNewsAPI);

module.exports = router;
