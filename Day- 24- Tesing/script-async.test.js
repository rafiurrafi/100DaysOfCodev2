import fetch from "node-fetch";
const swapi = require("./script-async");

it("calls swapi to get people", (done) => {
  expect.assertions(1);
  swapi.getPeople(fetch).then((data) => {
    expect(data.count).toBe(87);
    done();
  });
});
it("can test mock function also", () => {
  const mockFunction = jest.fn().mockReturnValue(
    Promise.resolve({
      json: () =>
        Promise.resolve({
          count: 87,
          reults: [0, 1, 2, 3, 4, 5],
        }),
    })
  );

  const mc = jest.fn().mockReturnValue(
    Promise.resolve({
      json: () =>
        Promise.resolve({
          count: 87,
          result: [1, 3, 2, 3, 12, 1211, 1],
        }),
    })
  );
  return swapi.getPeople(mockFunction).then((data) => {
    expect(mockFunction.mock.calls.length).toBe(1);
  });
});
