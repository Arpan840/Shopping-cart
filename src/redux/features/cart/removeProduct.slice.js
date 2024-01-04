import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {
    cartProducts: [],
    isLoading: false,
    error: null,
  };
export const removeCartItem = createAsyncThunk(
  "removeCartItem",
  async (productId) => {
    try {
      
      const cartProducts = JSON.parse(localStorage.getItem("product")) || [];
      const updatedCart = cartProducts.filter((item) => item.id !== productId);
      localStorage.setItem("product", JSON.stringify(updatedCart));
      return updatedCart;
    } catch (error) {
      throw error;
    }
  }
);

const removeCartProductsSlice = createSlice({
  name: "removeCartProductsSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    

    builder.addCase(removeCartItem.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });

    builder.addCase(removeCartItem.fulfilled, (state, action) => {
      state.isLoading = false;
      state.cartProducts = action.payload;
    });

    builder.addCase(removeCartItem.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default removeCartProductsSlice.reducer;
