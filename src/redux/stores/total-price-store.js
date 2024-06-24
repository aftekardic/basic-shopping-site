import { createSlice } from "@reduxjs/toolkit";
import { loadState } from "../localstore";
const initialState = {
  totalPrice: 0,
};

const totalPriceSlice = createSlice({
  name: "totalPrice",
  initialState: loadState()?.totalPrice || initialState,
  reducers: {
    setTotalPrice(state, action) {
      state.totalPrice = action.payload;
    },
  },
});

export const { setTotalPrice } = totalPriceSlice.actions;

export default totalPriceSlice;
