const searchRestaurant = require("./script");

dbMock = ["home.com", "homePalace.com", "homeSite.com", "katherine.com"];
it("is a silly test", () => {
  expect("hello").toBe("hello");
});
it("can search a restaurant", () => {
  expect(searchRestaurant("home", dbMock).length).toEqual(3);
});
