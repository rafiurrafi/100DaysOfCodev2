var earch = {
  isRound: true,
  numberFromSun: 3,
};

describe("Earth", function () {
  it("is round", function () {
    expect(earch.isRound).toBe(true);
  });
});
