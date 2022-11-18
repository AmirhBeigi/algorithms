import { reduce } from "./index";
import { describe, it, expect } from "vitest";

describe("filter", () => {
  it("should add all the members of the array together and return the number 10", () => {
    expect(
      reduce([1, 2, 3, 4], (previousValue, currentValue) => previousValue + currentValue, 0)
    ).toEqual(10);
  });

  it("should add the id of all members of the array together and add 5 and return the number 8.", () => {
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
