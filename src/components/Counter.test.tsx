import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Counter from "./Counter";

describe("Counter", () => {
  it("renders initial count", () => {
    render(<Counter />);
    expect(screen.getByText(/Count: 0/i)).toBeInTheDocument();
  });

  it("increments count when button is clicked", () => {
    render(<Counter />);
    const incrementButton = screen.getByText(/Increment/i);

    fireEvent.click(incrementButton);
    expect(screen.getByText(/Count: 1/i)).toBeInTheDocument();

    fireEvent.click(incrementButton);
    expect(screen.getByText(/Count: 2/i)).toBeInTheDocument();
  });
});
