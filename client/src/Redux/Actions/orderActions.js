// src/redux/actions/orderActions.js
import axios from "axios";

export const fetchOrders = () => async (dispatch) => {
  dispatch({ type: "FETCH_ORDERS_REQUEST" });
  try {
    const response = await axios.get("http://localhost:3005/api/orders");
    dispatch({ type: "FETCH_ORDERS_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "FETCH_ORDERS_FAILURE", payload: error.message });
  }
};

export const createOrder = (orderData) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://localhost:3005/api/orders",
      orderData
    );
    dispatch({ type: "CREATE_ORDER_SUCCESS", payload: response.data });
  } catch (error) {
    console.error("Error al crear la orden:", error);
  }
};
