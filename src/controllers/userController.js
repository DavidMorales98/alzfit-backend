const getUsers = async (req, res) => {
  res.status(200).send("Listado de usuarios");
};
const getUser = async (req, res) => {
  res.status(200).send("Información de usuario");
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
