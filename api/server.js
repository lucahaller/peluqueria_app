// server.js
const express = require("express");
const app = express();
const cors = require("cors");
const port = 3005;
const clientRoutes = require("./routes/clients");
const orderRoutes = require("./routes/orders");
const serviceRoutes = require("./routes/services");
const appointmentRoutes = require("./routes/appointments");
const employeeRoutes = require("./routes/employees");
app.use(cors());
app.use(express.json()); // Asegúrate de tener esto para analizar JSON

// Rutas
app.use("/api/clients", clientRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/services", serviceRoutes);
app.use("/api/appointments", appointmentRoutes);
app.use("/api/employees", employeeRoutes);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
