const googleSearch = require("./script");
dbMock = ["puri.com", "parata.com", "vaji.com", "daal.com", "sobji.com"];
it("is testing google search", () => {
  expect("Hello").toBe("Hello");
});
it("is searching google", () => {
  expect(googleSearch(dbMock, "nun")).toEqual([]);
  expect(googleSearch(dbMock, "puri")).toEqual(["puri.com"]);
});

it("works with undefined database", () => {
  expect(googleSearch(undefined, "puri")).toEqual([]);
});
