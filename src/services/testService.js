const { orientationTest } = require("../utils/sevenMinutes/orientationTest");
const { memoryTest } = require("../utils/sevenMinutes/memoryTest");
const { speechTest } = require("../utils/sevenMinutes/speechTest");

const meses = {
  Enero: 1,
  Febrero: 2,
  Marzo: 3,
  Abril: 4,
  Mayo: 5,
  Junio: 6,
  Julio: 7,
  Agosto: 8,
  Septiembre: 9,
  Octubre: 10,
  Noviembre: 11,
  Diciembre: 12,
};

const diasSemana = {
  Lunes: "lunes",
  Martes: "martes",
  Miércoles: "miércoles",
  Jueves: "jueves",
  Viernes: "viernes",
  Sábado: "sábado",
  Domingo: "domingo",
};

const sevenMinutes = async (params) => {
  const arreglo = params[0].data.answer;
  const entradaJSON = {
    mes: meses[arreglo[0]],
    dia: parseInt(arreglo[1]),
    año: parseInt(arreglo[2]),
    diaSemana: diasSemana[arreglo[3]],
    hora: arreglo[4],
  };
  const response1 = await orientationTest(entradaJSON);
  const arreglo2 = params[1].data.answer;
  const response2 = await memoryTest(arreglo2);
  const { category, answer } = params[2].data;
  const stringAnswer = answer.join();
  const response = await speechTest(category, stringAnswer);
  const response3 = response.total;
  const resultTotal = response1 + response2 + response3;
  return {resultTotal}
};

module.exports = {
  sevenMinutes,
};
