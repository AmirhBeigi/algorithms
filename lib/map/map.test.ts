import { map } from "./index";
import { describe, it, expect } from "vitest";

describe("map", () => {
  it("number of array", () => {
    expect(map([1, 2, 3], (item) => item + 1)).toEqual([2, 3, 4]);
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

    expect(map(array, (item, index) => `${index + 1}-${item.name}`)).toEqual(["1-blue", "2-green"]);
  });
});
