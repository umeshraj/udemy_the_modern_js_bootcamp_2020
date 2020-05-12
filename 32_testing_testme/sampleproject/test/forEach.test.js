const assert = require("assert");
const { forEach } = require("../index");

let numbers;
beforeEach(() => {
  numbers = [1, 2, 3];
});

it("Should sum an array", () => {
  let total = 0;
  forEach(numbers, (value) => {
    total += value;
  });

  assert.strictEqual(total, 6);
  // wreck numbers array for checking it
  numbers.push(3);
  numbers.push(3);
  numbers.push(3);
  numbers.push(3);
});

it("beforeEach is run each time", () => {
  assert.strictEqual(numbers.length, 4);
});
