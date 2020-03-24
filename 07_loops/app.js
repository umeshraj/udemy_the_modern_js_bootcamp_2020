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
