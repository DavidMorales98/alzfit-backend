const signServices = require("../services/signService");

const signIn = async (req, res) => {
  const response = await signServices.signIn(req, res);
  return res.status(response.status).send(response.send)
};
const signUp = async (req, res) => {
  const response = await signServices.signUp(req, res);
  return res.status(response.status).send(response.send)
};

module.exports = {
  signIn,
  signUp,
};
