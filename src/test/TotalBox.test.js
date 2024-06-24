import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TotalBox from "../components/total-box";

test("renders TotalBox with correct total price", () => {
  const totalPrice = 100;

  render(<TotalBox totalPrice={totalPrice} />);

  const totalLabelElement = screen.getByText(/Total Price:/i);
  expect(totalLabelElement).toBeInTheDocument();

  const totalPriceElement = screen.getByText(`${totalPrice} ₺`);
  expect(totalPriceElement).toBeInTheDocument();

  const checkoutButton = screen.getByRole("button", { name: /checkout/i });
  expect(checkoutButton).toBeInTheDocument();
});
