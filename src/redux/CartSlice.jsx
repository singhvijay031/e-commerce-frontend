import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});

export default CartSlice.reducer;
