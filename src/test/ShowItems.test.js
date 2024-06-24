import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import "@testing-library/jest-dom";
import ShowItems from "../components/show-items";

const mockStore = configureStore([]);
const store = mockStore({
  cardItems: {
    cardItems: [
      { id: 1, name: "Product 1", price: "10.00" },
      { id: 2, name: "Product 2", price: "20.00" },
    ],
  },
  totalPrice: {
    totalPrice: 30.0,
  },
});

test("renders ShowItems with correct data", () => {
  const { getByText } = render(
    <Provider store={store}>
      <ShowItems />
    </Provider>
  );

  const product1Element = getByText("Product 1");
  expect(product1Element).toBeInTheDocument();
});
