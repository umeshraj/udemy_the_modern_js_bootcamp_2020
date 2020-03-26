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
