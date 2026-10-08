import { describe, it, expect } from "vitest";
import { snack_names } from "./snacks";

describe("snacks", () => {
  it("should have at least 3 items", () => {
    expect(snack_names.length).toBeGreaterThanOrEqual(3);
  });

  it("should include 'chips'", () => {
    expect(snack_names).toContain("Chips");
  });
});

