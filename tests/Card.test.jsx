import { vi, describe, it, expect } from "vitest";
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import { Card } from "../src/components/Shop/Card";

describe("card component", () => {
  it("renders the card", async () => {
    const handleTotal = vi.fn();

    render(<Card cardID="1" handleTotal={handleTotal} />);

    expect(
      screen.getByRole("paragraph", { name: "loading" })
    ).toBeInTheDocument();
    await waitForElementToBeRemoved(
      screen.getByRole("paragraph", { name: "loading" })
    );

    expect(
      screen.getByRole("button", { name: "Add To Cart" })
    ).toBeInTheDocument();

    expect(screen.getByRole("img")).toBeInTheDocument();
  });
});
