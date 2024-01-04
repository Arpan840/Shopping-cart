import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCartProducts = createAsyncThunk(
  "cartProducts",
  async () => {
    try {
      const cartProducts = JSON.parse(localStorage.getItem("product"));
      return cartProducts;
    } catch (error) {
      throw error;
    }
  }
);

const initialState = {
  cartProducts: [],
  isLoading: false,
  error: null,
};

const cartProductsSlice = createSlice({
  name: "cartProducts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCartProducts.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });

    builder.addCase(fetchCartProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.cartProducts = action.payload; 
    });

    builder.addCase(fetchCartProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default cartProductsSlice.reducer;
