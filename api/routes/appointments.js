// api/routes/appointments.js
const express = require("express");
const router = express.Router();
const Appointment = require("../models/appointment");

// Crear una nueva cita
router.post("/", async (req, res) => {
  try {
    const appointment = await Appointment.create(req.body);
    res.status(201).json(appointment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtener todas las citas
router.get("/", async (req, res) => {
  try {
    const appointments = await Appointment.findAll();
    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtener una cita por ID
router.get("/:id", async (req, res) => {
  try {
    const appointment = await Appointment.findByPk(req.params.id);
    if (appointment) {
      res.status(200).json(appointment);
    } else {
      res.status(404).json({ message: "Cita no encontrada" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Actualizar una cita
router.put("/:id", async (req, res) => {
  try {
    const [updated] = await Appointment.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated) {
      const updatedAppointment = await Appointment.findByPk(req.params.id);
      res.status(200).json(updatedAppointment);
    } else {
      res.status(404).json({ message: "Cita no encontrada" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Eliminar una cita
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Appointment.destroy({
      where: { id: req.params.id },
    });
    if (deleted) {
      res.status(204).end();
    } else {
      res.status(404).json({ message: "Cita no encontrada" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
