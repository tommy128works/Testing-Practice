import capitalize from "./capitalize";

test("capitalize first letter only", () => {
  expect(capitalize("APPLE")).toBe("Apple");
});
