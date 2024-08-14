// models/order_detail.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Order = require("./order");
const Service = require("./service");

const OrderDetail = sequelize.define("OrderDetail", {
  cantidad: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  precio_unitario: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
});

OrderDetail.belongsTo(Order, { foreignKey: "pedido_id" });
OrderDetail.belongsTo(Service, { foreignKey: "servicio_id" });

module.exports = OrderDetail;
