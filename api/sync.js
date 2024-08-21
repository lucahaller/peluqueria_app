const sequelize = require("./config/database");
const Order = require("./models/OrderModel");
const Product = require("./models/ProductModel");

const syncDatabase = async () => {
  try {
    // Sincroniza los modelos con la base de datos
    await sequelize.sync({ force: true }); // 'force: true' eliminará todas las tablas existentes
    console.log("Base de datos sincronizada");
  } catch (error) {
    console.error("Error al sincronizar la base de datos:", error);
  }
};

syncDatabase();
