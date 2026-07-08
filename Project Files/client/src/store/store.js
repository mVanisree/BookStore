import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import productReducer from "./productSlice";

const loadCart = () => {
  const savedCart = localStorage.getItem("cart");

  if (savedCart) {
    return JSON.parse(savedCart);
  }

  return undefined;
};

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
  },

  preloadedState: {
    cart: loadCart(),
  },
});

store.subscribe(() => {
  localStorage.setItem(
    "cart",
    JSON.stringify(store.getState().cart)
  );
});