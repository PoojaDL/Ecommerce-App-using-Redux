import { createSlice } from "@reduxjs/toolkit";

const initState = { isCartOpen: false };

const cartSlice = createSlice({
  name: "cart",
  initialState: initState,
  reducers: {
    openCart(state) {
      state.isCartOpen = !state.isCartOpen;
    },
    closeCart(state) {
      state.isCartOpen = false;
    },
  },
});
export const cartActions = cartSlice.actions;
export default cartSlice;
