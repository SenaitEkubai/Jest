const functions = require("../functions/functions");

// test if defined

test("is defined", () => {
  expect(functions.getAge("Rudy", 35)).toBeDefined();
});

// test if return equals

test("2 + 2 is equal 2 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});
