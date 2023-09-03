import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-reducer";

const store = configureStore({ reducer: cartSlice.reducer });

export default store;
