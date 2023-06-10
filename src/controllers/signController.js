const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("../utils/jwt")

const signIn = async (req, res) => {
  try {
    const params = req.body;
    if (!params.email || !params.password) {
      return res.status(400).send({
        status: "error",
        message: "Faltan parámetros",
      });
    }
    const existingUser = await User.findOne({
      email: params.email.toLowerCase(),
    });
    if (existingUser) {
      let isPwd = bcrypt.compareSync(params.password, existingUser.password);
      if (!isPwd) {
        return res.status(400).send({
          status: "error",
          message: "Contraseña incorrecta",
        });
      }
      const token = jwt.createToken(existingUser)
      return res.status(200).send({
        status: "success",
        message: "Usuario existente",
        user: {
          name: existingUser.name,
          email: existingUser.email,
          licence: existingUser.licence
        },
        token
      });
    }
  } catch (error) {
    return res.status(500).send({
      status: "error",
      message: "Ocurrió un error en el servidor",
    });
  }
};
const signUp = async (req, res) => {
  try {
    const params = req.body;
    if (!params.name || !params.email || !params.password) {
      return res.status(400).send({
        status: "error",
        message: "Faltan parámetros",
      });
    }

    const existingUser = await User.findOne({
      email: params.email.toLowerCase(),
    });
    if (existingUser) {
      return res.status(400).send({
        status: "error",
        message: "Usuario existente",
      });
    }

    const hashedPassword = await bcrypt.hash(params.password, 10);
    params.password = hashedPassword;

    const user = new User(params);
    const userStored = await user.save();
    if (!userStored) {
      return res.status(400).send({
        status: "error",
        message: "Error al guardar usuario",
      });
    }

    return res.status(200).send({
      status: "success",
      user: userStored,
    });
  } catch (error) {
    console.error("Error:", error);
    // Manejar el error de manera apropiada, por ejemplo, enviando una respuesta de error al cliente.
    return res.status(500).send({
      status: "error",
      message: "Ocurrió un error en el servidor",
    });
  }
};

module.exports = {
  signIn,
  signUp,
};
