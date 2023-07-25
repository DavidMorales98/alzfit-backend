const { Schema, model, default: mongoose } = require("mongoose");

const PatientSchema = Schema({
  name: {
    type: String,
    require: true,
  },
  surname: {
    type: String,
    require: true,
  },
  rut: {
    type: String,
    require: true,
  },
  edad: {
    type: Number,
    require: true,
  },
  sexo: {
    type: String,
    require: true,
  },
  etapa: {
    type: String,
    require: true,
  },
  telefono: {
    type: Number,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  direccion: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  licence: {
    type: String,
    default: "Free",
  },
  assign: {
    type: String,
    default: 1,
  },
  test: [],
  medicamentos: [],
  diagnostico: [],
  actividades: [],
});
PatientSchema.set("timestamps", true);

module.exports = mongoose.model("patient", PatientSchema, "patients");
