// sync.js
const sequelize = require("./config/database");
const Client = require("./models/client");
const Service = require("./models/service");
const Order = require("./models/order");
const OrderDetail = require("./models/order_detail");
const Employee = require("./models/employee");
const Appointment = require("./models/appointment");

const syncDatabase = async () => {
  try {
    await sequelize.sync({ force: true }); // 'force: true' eliminará todas las tablas existentes
    console.log("Base de datos sincronizada");
  } catch (error) {
    console.error("Error al sincronizar la base de datos:", error);
  }
};

syncDatabase();
