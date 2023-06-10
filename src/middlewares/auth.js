const jwt = require("jwt-simple");
const moment = require("moment");

const libjwt = require("../utils/jwt");
const secret = libjwt.secret;

const auth = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(403).send({
      status: "error",
      message: "Error en la cabecera",
    });
  }

  let token = req.headers.authorization.replace(/['"]+/g, "");
  try {
    let payload = jwt.decode(token, secret);
    if (payload.exp <= moment().unix()) {
      return res.status(401).send({
        status: "error",
        message: "Token expirado",
      });
    }
    req.user = payload;
    next();
  } catch (error) {
    return res.status(404).send({
      status: "error",
      message: "Token invalido",
    });
  }
};

module.exports = {
    auth
}