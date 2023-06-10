const User = require("../models/user");
const bcrypt = require("bcrypt");

const signIn = async (req, res) => {
  res.status(200).send("Iniciar sesión");
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

    const existingUser = await User.findOne({ email: params.email.toLowerCase() });
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
