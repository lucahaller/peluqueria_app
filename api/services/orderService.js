const Order = require("../models/OrderModel");
const { Op } = require("sequelize");

const createOrder = async (orderData) => {
  try {
    const { fecha, hora } = orderData;

    // Verificar si hay algún turno disponible en la fecha
    const ordersOnSameDay = await Order.findAll({
      where: { fecha, estado: { [Op.not]: "cancelado" } },
    });

    const allOrdersOnSameDay = await Order.findAll({
      where: { fecha },
    });

    const isFullyBooked =
      allOrdersOnSameDay.length > 0 &&
      allOrdersOnSameDay.every((order) => order.estado === "reservado");

    if (isFullyBooked) {
      throw new Error("La fecha seleccionada está completamente reservada.");
    }

    return await Order.create(orderData);
  } catch (error) {
    throw new Error(error.message);
  }
};

const getOrders = async () => {
  try {
    return await Order.findAll();
  } catch (error) {
    throw new Error("Error al obtener las órdenes.");
  }
};

const updateOrderStatus = async (id, estado) => {
  try {
    const order = await Order.findByPk(id);

    if (!order) {
      throw new Error("Orden no encontrada.");
    }

    order.estado = estado;
    await order.save();

    // Verificar si se debe bloquear la fecha
    const ordersOnSameDay = await Order.findAll({
      where: { fecha: order.fecha, estado: { [Op.not]: "cancelado" } },
    });

    const allOrdersOnSameDay = await Order.findAll({
      where: { fecha: order.fecha },
    });

    const isFullyBooked =
      allOrdersOnSameDay.length > 0 &&
      allOrdersOnSameDay.every((order) => order.estado === "reservado");

    if (isFullyBooked) {
      // Aquí podrías agregar una lógica adicional si deseas manejar una acción específica
      // cuando una fecha se considera bloqueada por completo.
      console.log("La fecha está completamente reservada.");
    }

    return order;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  createOrder,
  getOrders,
  updateOrderStatus,
};
