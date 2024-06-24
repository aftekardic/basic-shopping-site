"use client";
import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./stores/filter-store";
import searchTermSlice from "./stores/global-search-store";
import cardItemsSlice from "./stores/add-items-store";
import detailSlice from "./stores/detail-store";
import totalPriceSlice from "./stores/total-price-store";
import { saveState } from "./localstore";

export function createStore() {
  const store = configureStore({
    reducer: {
      filter: filterSlice.reducer,
      searchTerm: searchTermSlice.reducer,
      cardItems: cardItemsSlice.reducer,
      detail: detailSlice.reducer,
      totalPrice: totalPriceSlice.reducer,
    },
  });

  return store;
}
const store = createStore();
store.subscribe(() => {
  saveState(store.getState());
});
export default store;
