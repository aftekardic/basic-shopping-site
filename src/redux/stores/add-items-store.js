import { createSlice } from "@reduxjs/toolkit";
import { loadState } from "../localstore";
const initialState = {
  cardItems: [],
};

const cardItemsSlice = createSlice({
  name: "cardItems",
  initialState: loadState()?.cardItems || initialState,
  reducers: {
    setCardItems(state, action) {
      state.cardItems = action.payload;
    },
  },
});

export const { setCardItems } = cardItemsSlice.actions;

export default cardItemsSlice;
