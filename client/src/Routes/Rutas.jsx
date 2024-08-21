// Rutas.js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../Components/Dashboard";

const Rutas = () => {
  // Estado para controlar la visibilidad del carrito

  // Función para alternar la visibilidad del carrito

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rutas;
