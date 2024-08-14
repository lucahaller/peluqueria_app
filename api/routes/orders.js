// routes/orders.js
const express = require("express");
const router = express.Router();
const Order = require("../models/order");

// Crear una nueva orden
router.post("/", async (req, res) => {
  try {
    const { clienteId, descripcion, precio, estado } = req.body;
    if (!clienteId || !descripcion || !precio || !estado) {
      return res
        .status(400)
        .json({ message: "Todos los campos son obligatorios." });
    }

    const nuevaOrden = await Order.create({
      clienteId,
      descripcion,
      precio,
      estado,
    });
    console.log(nuevaOrden);
    res.status(201).json(nuevaOrden);
  } catch (error) {
    console.error("Error al crear la orden:", error);
    res.status(500).json({ message: "Error al crear la orden." });
  }
});

router.get("/", async (req, res) => {
  try {
    const orders = await Order.findAll();
    res.status(200).json(orders);
  } catch (error) {
    console.error("Error al obtener las órdenes:", error);
    res.status(500).json({ message: "Error al obtener las órdenes." });
  }
});

module.exports = router;
