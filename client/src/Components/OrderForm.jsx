import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createOrder } from "../Redux/Actions/orderActions";

export default function OrderForm() {
  const [clienteId, setClienteId] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");
  const [estado, setEstado] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Crear el objeto del nuevo pedido
    const newOrder = {
      clienteId,
      descripcion,
      precio,
      estado,
    };

    // Despachar la acción para crear la orden
    dispatch(createOrder(newOrder));

    // Limpiar el formulario después de enviar
    setClienteId("");
    setDescripcion("");
    setPrecio("");
    setEstado("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        placeholder="Cliente ID"
        value={clienteId}
        onChange={(e) => setClienteId(e.target.value)}
        className="mb-2 p-2 border border-gray-300 rounded"
      />
      <input
        type="text"
        placeholder="Descripción"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
        className="mb-2 p-2 border border-gray-300 rounded"
      />
      <input
        type="number"
        placeholder="Precio"
        value={precio}
        onChange={(e) => setPrecio(e.target.value)}
        className="mb-2 p-2 border border-gray-300 rounded"
      />
      <input
        type="text"
        placeholder="Estado"
        value={estado}
        onChange={(e) => setEstado(e.target.value)}
        className="mb-2 p-2 border border-gray-300 rounded"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Realizar Pedido
      </button>
    </form>
  );
}
