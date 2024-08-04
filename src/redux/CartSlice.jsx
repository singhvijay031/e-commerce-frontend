import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});

export const { setProducts } = CartSlice.actions;
export default CartSlice.reducer;
