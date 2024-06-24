import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import CounterComponent from "../components/counter";

const mockStore = configureStore([]);

test("renders CounterComponent and handles increment and decrement actions", () => {
  const item = {
    id: 1,
    count: 2,
  };

  const store = mockStore({
    cardItems: {
      cardItems: [],
    },
  });

  const { getByText } = render(
    <Provider store={store}>
      <CounterComponent item={item} />
    </Provider>
  );

  expect(getByText("2")).toBeInTheDocument();

  fireEvent.click(getByText("+"));

  fireEvent.click(getByText("-"));
});
