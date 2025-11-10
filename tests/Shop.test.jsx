import { describe, it, expect } from "vitest";
import { getByTestId, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Shop from "../src/components/Shop/Shop";

describe("Shop page", () => {
  it.skip("renders a card element", ()=> {

  render(<Shop />)

  expect(getByTestId('cardElement')).toBeInTheDocument();
  })

});
