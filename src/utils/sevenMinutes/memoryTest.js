const memoryTest = async (params) => {
  var puntaje = 4;
  const RESPUESTA_1 = "destornillador";
  const RESPUESTA_2 = "zapato";
  const RESPUESTA_3 = "guitarra";
  const RESPUESTA_4 = "moto";
  if (!(params[0] === RESPUESTA_1)) {
    puntaje -= 1;
  }
  if (!(params[1] === RESPUESTA_2)) {
    puntaje -= 1;
  }
  if (!(params[2] === RESPUESTA_3)) {
    puntaje -= 1;
  }
  if (!(params[3] === RESPUESTA_4)) {
    puntaje -= 1;
  }
  return puntaje;
};

module.exports = {
  memoryTest,
};
