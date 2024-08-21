// server.js
const express = require("express");
const app = express();
const cors = require("cors");
const port = 3005;

// Importar rutas
const orderRoutes = require("./routes/orderRoutes");
const productRoutes = require("./routes/productRoutes");

// Configuración de middleware
app.use(cors());
app.use(express.json()); // Asegúrate de tener esto para analizar JSON

// Configuración de rutas
app.use("/api/orders", orderRoutes);
app.use("/api/products", productRoutes);

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
