// api/routes/services.js
const express = require("express");
const router = express.Router();
const Service = require("../models/service");

// Crear un nuevo servicio
router.post("/", async (req, res) => {
  try {
    const service = await Service.create(req.body);
    res.status(201).json(service);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtener todos los servicios
router.get("/", async (req, res) => {
  try {
    const services = await Service.findAll();
    res.status(200).json(services);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtener un servicio por ID
router.get("/:id", async (req, res) => {
  try {
    const service = await Service.findByPk(req.params.id);
    if (service) {
      res.status(200).json(service);
    } else {
      res.status(404).json({ message: "Servicio no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Actualizar un servicio
router.put("/:id", async (req, res) => {
  try {
    const [updated] = await Service.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated) {
      const updatedService = await Service.findByPk(req.params.id);
      res.status(200).json(updatedService);
    } else {
      res.status(404).json({ message: "Servicio no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Eliminar un servicio
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Service.destroy({
      where: { id: req.params.id },
    });
    if (deleted) {
      res.status(204).end();
    } else {
      res.status(404).json({ message: "Servicio no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
