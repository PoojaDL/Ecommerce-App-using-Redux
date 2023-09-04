import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-reducer";
import cartFunctionsSlice from "./cart-functionality";

const store = configureStore({
  reducer: { ui: cartSlice.reducer, cartFunction: cartFunctionsSlice.reducer },
});

export default store;
