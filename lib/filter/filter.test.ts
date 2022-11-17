import { filter } from "./index";
import { describe, it, expect } from "vitest";

describe("filter", () => {
  it("number of array", () => {
    expect(filter([1, 2, 3, 4], (item) => item % 2 === 0)).toEqual([2, 4]);
  });

  it("array of object", () => {
    const array = [
      {
        id: 1,
        name: "blue",
      },
      {
        id: 2,
        name: "green",
      },
    ];

    expect(filter(array, (item) => item.name === "blue")).toEqual([
      {
        id: 1,
        name: "blue",
      },
    ]);
  });
});
