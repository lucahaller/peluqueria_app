// src/redux/store.js
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import orderReducer from "../Reducers/orderReducer"; // Ejemplo de un reducer

const rootReducer = combineReducers({
  orders: orderReducer, // Puedes añadir más reducers aquí
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
