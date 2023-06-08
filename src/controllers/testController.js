const getTests = (req, res) => {
  res.status(200).send("Listado de tests");
};
const getTest = (req, res) => {
  res.status(200).send("Información de test");
};
const evaluateTest = (req, res) => {
  res.status(200).send("Evaluando test");
};

module.exports = {
  getTests,
  getTest,
  evaluateTest,
};
