const getPeople = require("../functions/script");

test("calls swapi to get people with a promise", () => {
  return getPeople().then((data) => {
    expect(data.count).toEqual(82);
    expect(data.count).not.toEqual(42);
  });
});
