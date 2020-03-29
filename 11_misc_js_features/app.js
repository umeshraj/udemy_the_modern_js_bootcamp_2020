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

// Spread in objects
const canine = {
  family: "Canine",
  furry: true
};

const dog = {
  ...canine,
  pet: true
};
console.log(dog);

// REST operator
function sumAllArgs() {
  console.log(arguments);
  const argsArray = [...arguments];
  const total = argsArray.reduce((total, currentVal) => {
    return total + currentVal;
  });
  return total;
}
console.log(sumAllArgs(1, 2, 3));

function sumRest(...nums) {
  const total = nums.reduce((total, curVal) => total + curVal);
  return total;
}
console.log(sumRest(1, 2, 3));

// collecting remaining
function fullName(first, last, ...others) {
  console.log(`${first}, ${last}, ${others}`);
}
fullName("Umes", "Raj", "sfaa", "safda");

// Destructuring arrays
const raceResults = ["sa", "asf", "ure", "xes"];
const [gold, silver, bronze] = raceResults;
console.log(gold);

const [first, , , fourth] = raceResults;
console.log(fourth);

const [winner, ...others] = raceResults;
console.log(others);

// Destructing objects
const runner = {
  name: "umesh",
  country: "india",
  age: 32
};
const { name, age } = runner;
console.log(name, age);

const { name: firstName } = runner;
console.log(firstName);

const { newName, ...newOthers } = runner;
console.log(newOthers);

// Nested destructuring
const results = [
  { name: "umesh", country: "India" },
  { name: "afsas", country: "USA" }
];

const [, { country }] = results;
console.log(country);
