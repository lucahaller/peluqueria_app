import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "../Redux/Actions/orderActions";

export default function OrderList() {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders.orders); // Cambia según el nombre de tu estado en el reducer
  const loading = useSelector((state) => state.orders.loading);
  const error = useSelector((state) => state.orders.error);

  useEffect(() => {
    dispatch(fetchOrders()); // Carga las órdenes cuando el componente se monta
  }, [dispatch]);
  console.log(orders);
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Lista de Pedidos</h2>
      {loading && <p>Cargando pedidos...</p>}
      {error && <p>Error al cargar pedidos: {error}</p>}
      <ul>
        {orders && orders.length > 0 ? (
          orders.map((order) => (
            <li
              key={order.id}
              className="mb-2 p-2 border border-gray-300 rounded"
            >
              <p>Cliente ID: {order.clienteId}</p>
              <p>Descripción: {order.descripcion}</p>
              <p>Precio: ${order.precio}</p>
              <p>Estado: {order.estado}</p>
            </li>
          ))
        ) : (
          <p>No hay pedidos disponibles.</p>
        )}
      </ul>
    </div>
  );
}
