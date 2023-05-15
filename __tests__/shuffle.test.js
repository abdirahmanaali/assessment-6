const botsData = require("../src/botsData");
const shuffle = require("../src/shuffle");

describe("shuffle should...", () => {
  // CODE HERE
  test("returns an empty array when given an empty array", () => {
    const shuffledArr = shuffle(botsData);
    expect(shuffledArr).toBeInstanceOf(Array);
  });

  test("does not modify the original array", () => {
    const arr = [1, 2, 3];
    const shuffledArr = shuffle(arr);
    expect(arr).toEqual([1, 2, 3]);
  });
});
