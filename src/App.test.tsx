// @vitest-environment jsdom

import { describe, expect, test } from "vitest";
import { fireEvent, render, screen, within } from "@testing-library/react";

import App from "./App";

describe("App", () => {
  test("app should be visible", () => {
    render(<App />);

    expect(screen.getByText("Available Slices")).toBeVisible();
  });

  test("there should be available slice options", () => {
    render(<App />);

    const sliceOptions = screen.getAllByTestId("slice-option");
    expect(sliceOptions.length > 0);
  });

  test("clicking on slice-option buttons adds slices", () => {
    render(<App />);

    // Clicking first slice option should add a slice
    const sliceOption = screen.getAllByTestId("slice-option")[0];
    const numberOfExistingSlices = screen.queryAllByTestId("slice").length;
    fireEvent.click(sliceOption as HTMLElement);
    const newNumberOfExistingSlices = screen.getAllByTestId("slice").length;
    expect(newNumberOfExistingSlices).toBe(numberOfExistingSlices + 1);

    // Clicking the option again should add another slice
    fireEvent.click(sliceOption as HTMLElement);
    const newerNumberOfExistingSlices = screen.getAllByTestId("slice").length;
    expect(newerNumberOfExistingSlices).toBe(newNumberOfExistingSlices + 1);
  });

  test("clicking on a slice's remove-slice button removes the slice", () => {
    render(<App />);
    const sliceOption = screen.getAllByTestId("slice-option")[0];
    fireEvent.click(sliceOption as HTMLElement);
    const numberOfExistingSlices = screen.queryAllByTestId("slice").length;

    const removeSliceButton = screen.getByTestId("remove-slice");
    fireEvent.click(removeSliceButton);
    expect(removeSliceButton).not.toBeInTheDocument();

    const newNumberOfExistingSlices = screen.queryAllByTestId("slice").length;
    expect(newNumberOfExistingSlices).toBe(numberOfExistingSlices - 1);
  });

  test("user can update input field on a slice", async () => {
    render(<App />);
    const [firstOption] = screen.getAllByTestId("slice-option");
    fireEvent.click(firstOption as HTMLElement);
    const firstSlice = screen.getAllByTestId("slice")[0];
    // Find an input inside the first slice
    const firstInput = within(firstSlice as HTMLElement).getAllByRole(
      "textbox"
    )[0] as HTMLInputElement;
    fireEvent.change(firstInput, { target: { value: "hi" } });
    expect(firstInput.value).toBe("hi");
  });

  test("bad user input triggers error display and good input doesn't", async () => {
    render(<App />);
    const sliceOptions = screen.getAllByTestId("slice-option");
    // Click all available slice options and try to find a number input
    sliceOptions.forEach(sliceOption =>
      fireEvent.click(sliceOption as HTMLElement)
    );
    const numberInput = screen
      .getAllByRole("textbox")
      .find(input => input.getAttribute("placeholder") === "Number Input");
    if (numberInput) {
      // Test failure case
      fireEvent.change(numberInput, { target: { value: "4." } });
      const errorDisplay = screen.queryAllByText(
        "Please enter valid number"
      )[0];
      expect(errorDisplay).toBeInTheDocument();

      // Test success case
      fireEvent.change(numberInput, { target: { value: "04.560" } });
      const newErrorDisplay = screen.queryAllByText(
        "Please enter valid number"
      )[0];
      expect(newErrorDisplay).toBeFalsy();
    }
  });
});
