import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../src/App";
import { BrowserRouter } from "react-router";

describe("App component", () => {
  it("renders the header", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    expect(screen.getByRole("banner")).toBeInTheDocument();
    expect(screen.getByRole("banner")).toHaveTextContent("CTRL+FITSHOPCART0");
  });

  it("renders the footer", ()=>{
    render(
        <BrowserRouter><App /></BrowserRouter>
    )

    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  })
});
