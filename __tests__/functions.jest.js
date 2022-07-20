const functions = require("../functions/functions");

// test if defined

test("is defined", () => {
  expect(functions.getAge("Rudy", 35)).toBeDefined();
});

// test if return equals

test("2 + 2 is equal 2 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

// test using specific matchers
test("test is null", () => {
  expect(functions.isNull()).toBeFalsy();
});
test("test is undefined", () => {
  expect(functions.isUndefined()).toBeFalsy();
});
/**
 matchers 
 toBeNull
 toBeUndefined
 toBeTruthy
 toBeFalsy
 toBeDefined
 */
//other test example with different matchers
test("zero", () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});

// object assignment
test("obejct assignment", () => {
  const data = { one: 1 };
  data["two"] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});

// logical matchers
test("2 plus 2 ", () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);
  expect(value).toBe(4);
  expect(value).toEqual(4);
});

// to test floating numbers
test("adding floating numbers ", () => {
  const value = 0.1 + 0.2;
  expect(value).toBeCloseTo(0.3);
});
