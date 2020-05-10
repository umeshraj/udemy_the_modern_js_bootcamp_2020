const { forEach, map } = require("./index");

const test = (desc, fn) => {
  try {
    console.log("===", desc);
    fn();
  } catch (err) {
    console.log(err.message);
  }
};

test("The forEach function", () => {
  let sum = 0;
  forEach([1, 2, 3], (value) => {
    sum += value;
  });

  if (sum !== 6) {
    throw new Error("Expected sum is not equal to 6");
  }
});

test("The map function", () => {
  const result = map([1, 2, 3], (value) => {
    return value * 2;
  });

  if (result[0] !== 2) {
    throw new Error(`Expected to find 2, but found ${result[0]}`);
  }
  if (result[1] !== 4) {
    throw new Error(`Expected to find 4, but found ${result[1]}`);
  }
  if (result[2] !== 6) {
    throw new Error(`Expected to find 6, but found ${result[2]}`);
  }
});
