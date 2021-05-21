import { numberToRomanString } from "../main/numberToRomanString";

describe("Roman Numbers test", () => {
  it.each([
    ["MMM", 3000],
    ["MM", 2000],
    ["M", 1000],
    ["CM", 900],
    ["DCCC", 800],
    ["DCC", 700],
    ["DC", 600],
    ["D", 500],
    ["CD", 400],
    ["CCC", 300],
    ["CC", 200],
    ["C", 100],
    ["X", 10],
    ["XX", 20],
    ["XXX", 30],
    ["XL", 40],
  ])("should return %p for %p", (output, input) => {
    expect(numberToRomanString(input)).toBe(output);
  });
});
