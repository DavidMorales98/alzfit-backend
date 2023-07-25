const { param } = require("../routes/patient");
const patientService = require("../services/patientService");

const getPatients = async (req, res) => {
  try {
    const response = await patientService.getPatients();
    res.status(200).send({ response });
  } catch {
    res.status(400).send("Error al realizar la consulta");
  }
};

const getPatient = async (req, res) => {
  try {
    const params = req.query
    const response = await patientService.getPatient(params);
    res.status(200).send({ response });
  } catch {
    res.status(400).send("Error al realizar la consulta");
  }
};

const createPatient = async (req, res) => {
    const params = req.body
    const response = await patientService.createPatient(params);
    res.status(200).send({ response });
};
const updatePatient = async (req, res) => {
  try {
    const params = req.body
    const response = await patientService.updatePatient(params);
    res.status(200).send({ response });
  } catch {
    res.status(400).send("Error al realizar la consulta");
  }
};

const patchPatient = async (req, res) => {
  try {
    const params = req.body
    const response = await patientService.patchPatient(params);
    res.status(200).send({ response });
  } catch {
    res.status(400).send("Error al realizar la consulta");
  }
};

module.exports = {
    getPatient,
    getPatients,
    createPatient,
    updatePatient,
    patchPatient
};
