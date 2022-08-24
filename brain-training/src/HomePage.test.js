import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import HomePage from "./Components/HomePage";

describe("Homepage", () => {
  let originalFetch;
  beforeEach(() => {
    originalFetch = global.fetch;
  });
  afterEach(() => {
    global.fetch = originalFetch;
  });
  const homepage = (
    <Router>
      <HomePage />
    </Router>
  );

  test("Should show homepage", () => {
    render(homepage);
  });

  test("Form contains all required buttons", () => {
    render(homepage);
    expect(screen.getByText("SINGLE-PLAYER")).toBeInTheDocument();
    expect(screen.getByText("MULTI-PLAYER")).toBeInTheDocument();
  });
});
