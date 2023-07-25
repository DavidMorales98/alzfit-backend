const Patient = require("../models/patient");

const getPatients = async () => {
  const data = await Patient.find();
  //.select({ password: 0, token: 0 });
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
const getPatient = async (params) => {
  const data = await Patient.findOne(params);
  console.log(data)
  if (!data) {
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
const createPatient = async (params) => {
  const existingPatient = await Patient.findOne({ rut: params.rut });
  if (existingPatient) {
    return {
      status: 400,
      send: {
        status: "error",
        message: "Patient",
        patient: null,
      },
    };
  }
  const patient = new Patient(params);
  const patientStored = await patient.save();
  if (!patientStored) {
    return {
      status: 400,
      send: {
        status: "error",
        message: "Error al crear paciente",
        patient: null,
      },
    };
  }
  return {
    status: 200,
    send: {
      status: "success",
      message: "Paciente creado",
      patient: patientStored,
    },
  };
};
const updatePatient = async (params) => {
  const rut = params.rut;
  const existingPatient = await Patient.findOne({rut});
  if (!existingPatient) {
    return {
      status: 404,
      send: {
        status: "error",
        message: "No se encontró ",
        talk: null,
      },
    };
  }
  Object.keys(params).forEach((campo) => {
    existingPatient[campo] = params[campo];
  });

  const patientToUpdate = await existingPatient.save();
  return {
    status: 200,
    send: {
      status: "success",
      message: "Paciente actualizado",
      patient: patientToUpdate,
    },
  };
};

const patchPatient = async (params) => {
  const existingPatient = await Patient.findOne({rut: params.rut});
  if (!existingPatient) {
    return {
      status: 404,
      send: {
        status: "error",
        message: "No se encontró ",
        talk: null,
      },
    };
  }

  if(params.diagnostico){
    existingPatient.diagnostico.push(params.diagnostico)
  }
  if(params.actividades){
    existingPatient.actividades.push(params.actividades)
  }
  if(params.medicamentos){
    existingPatient.medicamentos.push(params.medicamentos)
  }
  if(params.test){
    existingPatient.test.push(params.test)
  }
  const patientToUpdate = await existingPatient.save();
  return {
    status: 200,
    send: {
      status: "success",
      message: "Paciente actualizado",
      patient: patientToUpdate,
    },
  };
};

module.exports = {
  getPatient,
  getPatients,
  createPatient,
  updatePatient,
  patchPatient
};
