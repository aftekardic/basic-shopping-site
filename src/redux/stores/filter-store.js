import { createSlice } from "@reduxjs/toolkit";
import { loadState } from "../localstore";
const initialState = {
  sortBy: {
    oldToNew: true,
    newToOld: false,
    priceHighToLow: false,
    priceLowToHigh: false,
  },
  brands: [],
  model: [],
};

const filterSlice = createSlice({
  name: "filter",
  initialState: loadState()?.filter || initialState,
  reducers: {
    setSortBy(state, action) {
      state.sortBy = action.payload;
    },
    setBrands(state, action) {
      state.brands = action.payload;
    },
    setModel(state, action) {
      state.model = action.payload;
    },
  },
});

export const { setSortBy, setBrands, setModel } = filterSlice.actions;

export default filterSlice;
