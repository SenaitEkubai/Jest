const functions = require("../functions/functions");

// test if defined

test("is defined", () => {
  expect(functions.getAge("Rudy", 35)).toBeDefined();
});
