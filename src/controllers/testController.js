const testService = require("../services/testService");

const getTests = (req, res) => {
  res.status(200).send("Listado de tests");
};
const getTest = (req, res) => {
  res.status(200).send("Información de test");
};
const evaluateTest = async (req, res) => {
  const response = await testService.sevenMinutes(req.body);
  return res.send(response);
};

module.exports = {
  getTests,
  getTest,
  evaluateTest,
};
