import fetch from "node-fetch";
const swapi = require("./script-async");

it("calls swapi to get people", (done) => {
  expect.assertions(1);
  swapi.getPeople(fetch).then((data) => {
    expect(data.count).toBe(87);
    done();
  });
});
