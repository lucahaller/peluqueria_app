import React from "react";
import OrderForm from "./OrderForm";
import OrderList from "./OrderList";

export default function Dashboard() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <OrderForm />
      <OrderList />
    </div>
  );
}
