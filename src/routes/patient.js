const express = require("express");
const router = express.Router();
const patientController = require("../controllers/patientController");

router
  .get("/patients", patientController.getPatients)
  .get("/patient", patientController.getPatient)
  .post("/patient", patientController.createPatient)
  .put("/patient", patientController.updatePatient)
  .patch("/patient", patientController.patchPatient);

module.exports = router;
