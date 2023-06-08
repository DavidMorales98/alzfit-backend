const infoService = require("../services/infoService");

const getNewsAPI = async (req, res) => {
  try{
    const response = await infoService.getNews();
    res.status(200).send({response});
  }catch{
    res.status(400).send("Error al realizar la consulta")
  }
};

module.exports = {
  getNewsAPI,
};
