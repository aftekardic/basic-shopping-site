import { createSlice } from "@reduxjs/toolkit";
import { loadState } from "../localstore";
const initialState = {
  detail: null,
};

const detailSlice = createSlice({
  name: "detail",
  initialState: loadState()?.detail || initialState,
  reducers: {
    setDetail(state, action) {
      state.detail = action.payload;
    },
  },
});

export const { setDetail } = detailSlice.actions;

export default detailSlice;
