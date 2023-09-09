// @vitest-environment jsdom

import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";

import App from "./App";

describe("App", () => {
  test("should check that the App is visible", () => {
    render(<App />);

    expect(screen.getByText("Vite + React")).toBeVisible();
  });
});
