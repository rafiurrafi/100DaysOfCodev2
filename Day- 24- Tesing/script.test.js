const searchMeal = require("./script");
meals = [
  "rice",
  "meat",
  "beef",
  "chicken",
  "chicken tanduri",
  "chicken sizzling",
  "chicken curry",
];

it("can test silly file", () => {
  expect(10).toBe(10);
});

it("can test chicken item", () => {
  expect(searchMeal("chicken", meals).length).toEqual(3);
});
