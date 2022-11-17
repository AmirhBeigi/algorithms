import { reduce } from "./index";
import { describe, it, expect } from "vitest";

describe("filter", () => {
  it("number of array", () => {
    expect(
      reduce([1, 2, 3, 4], (previousValue, currentValue) => previousValue + currentValue, 0)
    ).toEqual(10);
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

    expect(
      reduce(array, (previousValue, currentValue) => previousValue + currentValue.id, 5)
    ).toEqual(8);
  });
});
