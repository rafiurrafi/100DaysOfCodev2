const googleDatabase = require("./index");
dbMock = ["india", "africa", "australia"];
it("is a silly test", () => {
  expect("helo").toBe("hello");
  console.log(googleDatabase, dbMock);
});

it("is searching google", () => {
  expect(googleDatabase("tictok")).toEqual([]);
});
