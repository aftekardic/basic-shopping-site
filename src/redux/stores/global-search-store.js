import { createSlice } from "@reduxjs/toolkit";
import { loadState } from "../localstore";
const initialState = {
  searchTerm: null,
};

const searchTermSlice = createSlice({
  name: "searchTerm",
  initialState: loadState()?.searchTerm || initialState,
  reducers: {
    setSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
  },
});

export const { setSearchTerm } = searchTermSlice.actions;

export default searchTermSlice;
