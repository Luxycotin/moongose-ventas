import { Model, Schema } from "mongoose";

const empleadoSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  apellido: {
    type: String,
    required: true,
  },
  contraseña: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  telefono: {
    type: String,
    required: true,
  },
});

const empleado = Model("Empleados", empleadoSchema);

const ventasSchema = new Schema({
  fecha: {
    type: Date,
    required: true,
  },
  precio: {
    type: Number,
    required: true,
  },
  producto: {
    type: String,
    required: true,
  },
  empleado: {
    type: Schema.Types.ObjectId,
    ref: "empleado",
  },
});

const venta = Model("Ventas", ventasSchema);

const sucursalSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  telefono: {
    type: String,
    required: true,
  },
  empleados: [empleadoSchema],
  ubicacion: {
    type: String,
    required: true,
  },
});

const sucursal = Model("Sucursales", sucursalSchema);

const autorizacionSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  contraseña: {
    type: String,
    required: true,
  },
});

const autorización = Model("Empleados", autorizacionSchema);