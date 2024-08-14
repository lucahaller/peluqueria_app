// models/appointment.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Client = require("./client");
const Employee = require("./employee");

const Appointment = sequelize.define("Appointment", {
  fecha: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  estado: {
    type: DataTypes.ENUM("pendiente", "confirmado", "completado", "cancelado"),
    defaultValue: "pendiente",
  },
  observaciones: {
    type: DataTypes.TEXT,
  },
});

Appointment.belongsTo(Client, { foreignKey: "cliente_id" });
Appointment.belongsTo(Employee, { foreignKey: "empleado_id" });

module.exports = Appointment;
