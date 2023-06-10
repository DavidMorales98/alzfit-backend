const User = require("../models/user")
const userServices = require("../services/userService")

const getUsers = async (req, res) => {
  try {
    const response = await userServices.getUsers(req, res);
    return res.status(response.status).send(response.send)
  } catch (error) {
    // Manejar cualquier error ocurrido durante la consulta a la base de datos
    return res.status(500).send({message:"Error en el servidor"})
  }
};

const getUser = async (req, res) => {
  try{
    const response = await userServices.getUser(req, res);
    return res.status(response.status).send(response.send)
  }
  catch{
    return res.status(500).send({message:"Error en el servidor"})
  }
};
const createUser = async (req, res) => {
  res.status(200).send("Crear usuario");
};
const updateUser = async (req, res) => {
  res.status(200).send("Editar usuario");
};
const deleteUser = async (req, res) => {
  res.status(200).send("Eliminar usuario");
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
