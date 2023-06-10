const User = require("../models/user");

const getUsers = async (req, res) => {
  const data = await User.find().select({ password: 0, token: 0 });
  if (data.length === 0) {
    return {
        status: 404,
        send: {
          status: "error",
          message: "No se encontraron usuarios",
          user: null,
        },
      };
  }
  return {
    status: 200,
    send: {
      status: "success",
      message: "Existen usuarios",
      users: data,
    },
  };
};

const getUser = async (req, res) => {
  let id = req.params.id;
  const data = await User.findById(id).select({ password: 0, token: 0 });
  if (data.length === 0) {
    return {
        status: 404,
        send: {
          status: "error",
          message: "No se encontró usuario",
          user: null,
        },
      };
  }
  return {
    status: 200,
    send: {
      status: "success",
      message: "Existe usuario",
      user: data,
    },
  };
};

module.exports = {
  getUser,
  getUsers,
};
