import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  quantity: 0,
  totalQuantity: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      console.log("state", state.cart);
      console.log("action", action);
      state.cart.push({ ...action.payload, quantity: 1 });
      state.totalQuantity += 1;
    },
    increaseCart: (state, action) => {
      console.log("state", state.cart);
      console.log("action", action);
      const { id } = action.payload;
      const currentItem = state.cart.findIndex(
        (cartIndex) => cartIndex.id === id
      );
      state.cart[currentItem].quantity += 1;
      state.totalQuantity += 1;
    },
    decreaseCart: (state, action) => {
      console.log("state", state.cart);
      console.log("action", action);
      const { id } = action.payload;
      const currentItem = state.cart.findIndex(
        (cartIndex) => cartIndex.id === id
      );
      state.cart[currentItem].quantity -= 1;
      state.totalQuantity += 1;
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
