const signIn = async (req, res) => {
  res.status(200).send("Iniciar sesión");
};
const signUp = async (req, res) => {
  res.status(200).send("Registrarse");
};

module.exports = {
  signIn,
  signUp,
};
