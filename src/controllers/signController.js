const signServices = require("../services/signService");

const signIn = async (req, res) => {
  try{
    const response = await signServices.signIn(req, res);
    return res.status(response.status).send(response.send)
  }
  catch{
    return res.status(500).send({message:"Error en el servidor"})
  }
};
const signUp = async (req, res) => {
  try{
    const response = await signServices.signUp(req, res);
    return res.status(response.status).send(response.send)
  }catch{
    return res.status(500).send({message:"Error en el servidor"})
  }
};

module.exports = {
  signIn,
  signUp,
};
