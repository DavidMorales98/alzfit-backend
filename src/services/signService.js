const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("../utils/jwt")

const signIn = async (req, res) => {
  try {
    const params = req.body;
    if (!params.email || !params.password) {
        return ({
            status:400,
            send: {
                status: "error",
                message: "Faltan parámetros"
            },
            user: null
        })
    }
    const existingUser = await User.findOne({
      email: params.email.toLowerCase(),
    });
    if (existingUser) {
      let isPwd = bcrypt.compareSync(params.password, existingUser.password);
      if (!isPwd) {
        return ({
            status:400,
            send: {
                status: "error",
                message: "Credenciales incorrectas"
            },
            user: null
        })
      }
      const token = jwt.createToken(existingUser)
      return ({
        status:200,
        send: {
            status: "error",
            message: "Sesión iniciada"
        },
        user: {
            name: existingUser.name,
            email: existingUser.email,
            licence: existingUser.licence,
            token
          },
    })
    }
  } catch (error) {
    return ({
        status:500,
        send: {
            status: "error",
            message: "Ocurrió un error en el servidor"
        },
        user: null
    })
  }
};
const signUp = async (req, res) => {
  try {
    const params = req.body;
    if (!params.name || !params.email || !params.password) {
        return ({
            status:400,
            send: {
                status: "error",
                message: "Faltan parámetros"
            },
            user: null
        })
    }

    const existingUser = await User.findOne({
      email: params.email.toLowerCase(),
    });
    if (existingUser) {
        return ({
            status:400,
            send: {
                status: "error",
                message: "Usuario ya existe"
            },
            user: null
        })
    }

    const hashedPassword = await bcrypt.hash(params.password, 10);
    params.password = hashedPassword;

    const user = new User(params);
    const userStored = await user.save();
    if (!userStored) {
        return ({
            status:400,
            send: {
                status: "error",
                message: "Error al guardar usuario"
            },
            user: null
        })
    }

    return ({
        status:200,
        send: {
            status: "success",
            message: "Usuario guardado"
        },
        user: userStored
    })
  } catch (error) {
    console.error("Error:", error);
    // Manejar el error de manera apropiada, por ejemplo, enviando una respuesta de error al cliente.
    return ({
        status:500,
        send: {
            status: "error",
            message: "Ocurrió un error en el servidor"
        },
        user: null
    })
  }
};

module.exports = {
    signIn,
    signUp
}