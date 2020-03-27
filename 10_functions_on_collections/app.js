const numbers = [10, 11, 1, 65, 12, 45, 65];

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

// ARROW functions
const isEven = x => {
  return x % 2 === 0;
};

const square = x => {
  return x * x;
};

// implicit return no {}
const square2 = x => x * x;

// double w/ arrow
console.log("Double w/ arrow fn");
const doubles1 = numbers.map(x => 2 * x);
console.log(doubles1);

console.log("Parity list");
const parity = numbers.map(n => (n % 2 === 0 ? "even" : "odd"));
console.log(numbers);
console.log(parity);

// FIND
let movies = ["as", "safsaf", "fdds", "dswer"];
const movie = movies.find(m => m.includes("sa"));
console.log(movie);

// FILTER
const evenNumbers = numbers.filter(x => x % 2 === 0);
console.log(evenNumbers);

const oddNumbers = numbers.filter(function(x) {
  return x % 2 === 1;
});

// EVERY
console.log("SOME & EVERY");
const words = ["dog", "dig", "cat"];
const allThreeLetters = words.every(word => word.length == 3);
console.log(allThreeLetters);

// SOME
const someDStart = words.some(word => word[0] === "d");
console.log(someDStart);
