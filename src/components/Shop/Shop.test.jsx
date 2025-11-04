import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Shop from "./Shop";

describe("Shop page", () => {
  it.skip("Adds 3x of item #2 to cart using add one button"),
    async () => {
      const user = userEvent.setup();

      render(<Shop />);
      const button = screen.getByRole("button", { name: "+" });

      await user.click(button);
      await user.click(button);
      await user.click(button);

      expect(screen.getByRole("input").value).toBe(3);
    };
});
