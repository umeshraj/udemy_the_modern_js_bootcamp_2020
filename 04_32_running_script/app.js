// alert("Hello, world!");

// conditionals

if (1 === 1) {
  console.log("It's true");
}

// Example 2
let rating = 1;
if (rating === 3) {
  console.log("You are a superstar");
} else if (rating == 2) {
  console.log("You are ok");
} else {
  console.log("Invalid rating");
}

// Example 3
let num = 37;

if (num % 2 !== 0) {
  console.log("It's odd");
}

// nested conditionals
let password = "asdf afdsa";

if (password.length >= 6) {
  if (password.indexOf(" ") === -1) {
    console.log("Valid password");
  } else {
    console.log("Password is long, but no spaces allowed");
  }
} else {
  console.log("Passworld should be longer than 6");
}
