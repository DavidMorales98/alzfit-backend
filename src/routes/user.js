const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router
  .get("/users", userController.getUsers)
  .get("/user", userController.getUser)
  .post("/user", userController.createUser)
  .put("/user", userController.updateUser)
  .delete("/user", userController.deleteUser);

module.exports = router;
