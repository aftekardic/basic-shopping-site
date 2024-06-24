import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import SearchBar from "../components/search-bar";

test("renders SearchBar and triggers onSearch correctly", () => {
  const mockOnSearch = jest.fn();

  const { getByPlaceholderText } = render(
    <SearchBar onSearch={mockOnSearch} />
  );

  const searchInput = getByPlaceholderText(/Search/i);

  fireEvent.change(searchInput, { target: { value: "test" } });

  expect(mockOnSearch).toHaveBeenCalledWith("test");
});
