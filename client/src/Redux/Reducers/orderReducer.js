// src/redux/reducers/orderReducer.js
const initialState = {
  orders: [],
  loading: false,
  error: null,
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_ORDERS_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_ORDERS_SUCCESS":
      return {
        ...state,
        loading: false,
        orders: action.payload,
      };
    case "FETCH_ORDERS_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "CREATE_ORDER_SUCCESS":
      return {
        ...state,
        orders: [...state.orders, action.payload],
      };
    default:
      return state;
  }
};

export default orderReducer;
