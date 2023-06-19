const testService = require("../services/testService");

const getTests = (req, res) => {
  res.status(200).send("Listado de tests");
};
const getTest = (req, res) => {
  res.status(200).send("Información de test");
};
const evaluateTest = async (req, res) => {
  try {
    const response = await testService.sevenMinutes(req.body);
    return res.send(response)
  } catch (error) {
    // Manejar cualquier error ocurrido durante la consulta a la base de datos
    return res.status(500).send({message:"Error en el servidor"})
  }
};

module.exports = {
  getTests,
  getTest,
  evaluateTest,
};
