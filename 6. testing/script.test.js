const googleSearch = require("./script");

const dbMock = [
  "puri.com",
  "porota.com",
  "dalpuri.com",
  "alupuri.com",
  "purivaji.com",
];

it("is dummy test", () => {
  expect("Hello").toBe("Hello");
});
it("test googleData", () => {
  console.log(googleSearch(dbMock, "fuska"));
  expect(googleSearch(dbMock, "fuska")).toEqual([
    // "puri.com",
    // "dalpuri.com",
    // "alupuri.com",
  ]);
});

it("count length of", () => {
  console.log(googleSearch(dbMock, "fuska"));
  expect(googleSearch(dbMock, "fuska").length).toEqual(0);
});
