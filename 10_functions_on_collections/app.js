const numbers = [10, 12, 45, 65];

function triple(num) {
  console.log(num * 3);
}

// for each w/ anony fn
numbers.forEach(function(num) {
  console.log(num);
});

// for each w/ named fn
numbers.forEach(triple);

// for each w/ index
console.log("For each w/ index");
numbers.forEach(function(num, idx) {
  console.log(`${idx}: ${num}`);
});

// MAP

console.log("Double w/ map");
const doubles = numbers.map(function(n) {
  return 2 * n;
});
console.log(doubles);
