// for loop
for (let idx = 0; idx < 5; idx++) {
  console.log("Hello");
}

// for increment
for (let idx = 0; idx < 5; idx += 4) {
  console.log("Hello");
}

// for loop array
const scores = [30, 2, 132, 12, 102];
for (let idx = 0; idx < scores.length; idx++) {
  console.log(`${idx}: ${scores[idx]}`);
}

// nested loops
for (let i = 1; i <= 5; i++) {
  for (let j = 3; j >= 0; j--) {
    console.log(`(${i}, ${j})`);
  }
}

// while loops
console.log("Working on while loops");
let j = 0;
while (j <= 5) {
  console.log(j);
  j++;
}

// guessing game
console.log("Guessing game");
const target = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);
while (guess !== target) {
  guess = Math.floor(Math.random() * 10);
  console.log(target, guess);
}
console.log("Success!!");

// Break

// for of
console.log("For...of");
let test = ["aa", "asf", "as", "swer"];
for (let ur of test) {
  console.log(ur);
}

// for of with object
const movies = {
  a: 10,
  b: 15,
  c: 12
};

// // this will not work
// for (let x of movies) {
//   console.log(x);
// }

// alternatively for..of with objects
for (let m of Object.keys(movies)) {
  console.log(m);
}

for (let r of Object.values(movies)) {
  console.log(r);
}
