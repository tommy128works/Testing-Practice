import calculator from "./calculator";

test("calculator addition", () => {
  expect(calculator.add(10, 20)).toBe(30);
});

test("calculator subtraction", () => {
  expect(calculator.subtract(20, 10)).toBe(10);
});

test("calculator division", () => {
  expect(calculator.divide(30, 3)).toBe(10);
});

test("calculator multiplication", () => {
  expect(calculator.multiply(10, 5)).toBe(50);
});
