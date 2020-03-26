// lexical scope

function outer() {
  let movie = "Amadeus";
  function inner() {
    console.log(movie.toUpperCase());
  }
  inner();
}

outer();

// Function expressions
console.log("Function expression");

function square1(num) {
  console.log(num * num);
}

const square = function(num) {
  return num * num;
};

console.log(square1(5));
console.log(square(10));

// Higher order functions
console.log("Higher order functions");
function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}

const operations = [add, subtract, multiply, divide];
for (func of operations) {
  let result = func(10, 5);
  console.log(result);
}

const thing = {
  doSomething: multiply
};
console.log(thing.doSomething(50, 2));

// Higher order functions w/ input

function callThrice(f) {
  f();
  f();
  f();
}

function cry() {
  console.log("Boo hoo..");
}

console.log(callThrice(cry));

// return a function
function multiplyBy(num) {
  return function(x) {
    return x * num;
  };
}

const triple = multiplyBy(3);
const double = multiplyBy(2);

console.log(triple(6));
console.log(double(12));

// another factor
function makeBetweenFunc(min, max) {
  return function(x) {
    return x >= min && x <= max;
  };
}
const isChild = makeBetweenFunc(0, 18);
console.log(isChild(10));

const isNineties = makeBetweenFunc(1990, 1999);

const isNiceWeather = makeBetweenFunc(60, 90);

// call back
function grumpus() {
  alert("Gahh! Go away!");
}
// // setTimeout(grumpus, 5000);
// setTimeout(function() {
//   alert("Welcome");
// }, 3000);

const btn = document.querySelector("button");
// btn.addEventListener("click", grumpus);
btn.addEventListener("click", function() {
  alert("Why did you click me");
});
