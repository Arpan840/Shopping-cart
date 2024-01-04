
import { createSlice } from "@reduxjs/toolkit";

const resetSlice = createSlice({
  name: "reset",
  initialState: {},
  reducers: {
    resetAll: (state) => {
      console.log("reset")
      state.cartProducts = [];
      state.isLoading = false;
      state.error = null;
    },
  },
});

export const { resetAll } = resetSlice.actions;
export default resetSlice.reducer;
