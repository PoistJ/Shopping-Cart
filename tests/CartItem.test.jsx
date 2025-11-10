import { vi, describe, it, expect } from "vitest";
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import { CartItem } from "../src/components/Cart/CartItem";

describe("cart item component", () => {
  it("renders the cart item", async () => {
    const mockTotal = vi.fn();

    render(<CartItem item="1" quantity="1" handleTotal={mockTotal} />);

    expect(screen.getByTestId("loading")).toBeInTheDocument();

    await waitForElementToBeRemoved(screen.getByTestId("loading"));
    expect(
      screen.getByRole("button", { name: "+" })
    ).toBeInTheDocument();

    expect(screen.getByRole("img")).toBeInTheDocument();
  });
});
