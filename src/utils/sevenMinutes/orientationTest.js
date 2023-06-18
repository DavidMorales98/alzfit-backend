const orientationTest = async (json) => {
  // Obtener la fecha y hora actual
  const fechaActual = new Date();

  // Obtener los valores del JSON
  const { mes, dia, año, diaSemana, hora } = json;

  // Calcular la puntuación
  let puntuacion = 113;
  // Comparar el año
  if (!(año === fechaActual.getFullYear())) {
    const añosDiferentesAnt = año - fechaActual.getFullYear();
    puntuacion -= 10 * Math.abs(añosDiferentesAnt);
  }

  // Comparar el mes
  if (!(mes === fechaActual.getMonth() + 1)) {
    const mesesDiferentes = Math.abs(mes - (fechaActual.getMonth() + 1));
    puntuacion -= 5 * mesesDiferentes;
  }

  // Comparar el día
  if (!(dia === fechaActual.getDate())) {
    const diasDiferentes = Math.abs(dia - fechaActual.getDate());
    puntuacion -= diasDiferentes;
  }
  // Comparar el día de la semana
  const diaSemanaActual = fechaActual
    .toLocaleString("es", { weekday: "long" })
    .toLowerCase();
  const diaSemanaJson = diaSemana.toLowerCase();

  if (!(diaSemanaJson === diaSemanaActual)) {
    const diasSemanaDiferentes = calcularDiferenciaDiasSemana(
      diaSemanaJson,
      diaSemanaActual
    );
    puntuacion -= diasSemanaDiferentes;
  }
  const horaActual = fechaActual.getHours();
  const minutosActual = fechaActual.getMinutes();

  // Comparar la hora
  // Comparar la hora
  const [horaJson, minutosJson] = hora.split(":").map(Number);
  const diferenciaHoras = horaJson - horaActual;

  const diferenciaMinutos = minutosJson - minutosActual;

  const minutosTotalesDiferencia = Math.abs(
    diferenciaHoras * 60 + diferenciaMinutos
  );

  if (!(minutosTotalesDiferencia === 0)) {
    const penalizacionMinutos = Math.floor(minutosTotalesDiferencia / 30);
    puntuacion -= penalizacionMinutos;
  }
  return puntuacion;
};

// Función auxiliar para obtener el número correspondiente al día de la semana
function obtenerDiaSemanaNumero(diaSemana) {
  const diasSemana = [
    "domingo",
    "lunes",
    "martes",
    "miercoles",
    "jueves",
    "viernes",
    "sabado",
  ];
  return diasSemana.findIndex(
    (dia) => dia.toLowerCase() === diaSemana.toLowerCase()
  );
}

// Función auxiliar para calcular la diferencia de días de la semana
function calcularDiferenciaDiasSemana(diaSemana1, diaSemana2) {
  const diasSemana = [
    "domingo",
    "lunes",
    "martes",
    "miercoles",
    "jueves",
    "viernes",
    "sabado",
  ];
  const indice1 = obtenerDiaSemanaNumero(diaSemana1);
  const indice2 = obtenerDiaSemanaNumero(diaSemana2);
  const diferencia = (indice1 - indice2 + 7) % 7;
  return diferencia === 0 ? 0 : 1;
}

module.exports = {
  orientationTest
}