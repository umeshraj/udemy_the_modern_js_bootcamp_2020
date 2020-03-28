// default params
function multiply(x, y = 1) {
  return x * y;
}

console.log(multiply(5));

// Spread in function
const nums = [3, 1, 32, 23, 1, 4];
console.log(Math.max(...nums));

// Spread in array literals
const colors = ["red", "green"];
const animals = ["dog", "cat", "pig"];
const combo = [...colors, ...animals];
console.log(combo);
