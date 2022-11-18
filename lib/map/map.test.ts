import { map } from "./index";
import { describe, it, expect } from "vitest";

describe("map", () => {
  it("should add 1 to all members of the array and return a new array that has 2,3,4", () => {
    expect(map([1, 2, 3], (item) => item + 1)).toEqual([2, 3, 4]);
  });

  it("should add index to first of all members of the array and return a new array that has '1-blue', '2-green'", () => {
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

    expect(map(array, (item, index) => `${index + 1}-${item.name}`)).toEqual(["1-blue", "2-green"]);
  });
});
