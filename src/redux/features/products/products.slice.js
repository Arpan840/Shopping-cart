import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllProducts = createAsyncThunk("products", async () => {
  try {
    const response = await axios.get("https://dummyjson.com/products");
    return response.data.products;
  } catch (error) {
    console.log(error);
  }
});

const initialState = {
  products: [],
  isLoading: false,
  error: null,
};

export const productsSlice = createSlice({
  name: "items",
  initialState,
  extraReducers:(builder)=> {  
    builder
    .addCase(getAllProducts.pending,(state)=>{
    state.isLoading =true
   })
    .addCase(getAllProducts.fulfilled,(state,action)=>{
      state.isLoading = false;
      state.products= action.payload
    })
    .addCase(getAllProducts.rejected,(state,action)=>{
        state.isLoading = false;
        state.error = action.payload
    })
  },
})

export default productsSlice.reducer;
