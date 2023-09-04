import { createSlice } from "@reduxjs/toolkit";

const cartFunctionsSlice = createSlice({
  name: "cartFunction",
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          quantity: 1,
          price: newItem.price,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    increment(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    decrement(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (existingItem && newItem.quantity > 1) {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - newItem.price;
      } else {
        state.items = state.items.filter((item) => item.id !== newItem.id);
      }
    },
  },
});

export const cartFunctionActions = cartFunctionsSlice.actions;
export default cartFunctionsSlice;
