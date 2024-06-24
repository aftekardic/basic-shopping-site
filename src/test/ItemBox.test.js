import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import ItemBox from "../components/item-box";

const mockStore = configureStore([]);

test("renders ItemBox component and handles actions", () => {
  const item = {
    id: 1,
    name: "Sample Item",
    price: 10,
    image: "sample-image-url",
  };

  const store = mockStore({
    cardItems: {
      cardItems: [],
    },
  });

  const { getByText, getByRole } = render(
    <Provider store={store}>
      <ItemBox item={item} />
    </Provider>
  );

  expect(getByText(`${item.price} ₺`)).toBeInTheDocument();
  expect(getByText(item.name)).toBeInTheDocument();

  fireEvent.click(getByRole("img"));

  expect(store.getActions()).toEqual([
    { type: "detail/setDetail", payload: item },
  ]);

  fireEvent.click(getByText("Add to Card"));
});
