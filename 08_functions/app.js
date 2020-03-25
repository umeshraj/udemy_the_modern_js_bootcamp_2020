function rollDie() {
  let roll = Math.floor(Math.random() * 6) + 1;
  return roll;
}

function throwDice(numRolls) {
  for (let i = 0; i < numRolls; i++) {
    console.log(rollDie());
  }
}

throwDice(2);

// challenge 1: password validator
console.log("Password validator");
function isValidPassword(password, username) {
  // check length
  const validLength = password.length >= 8;

  // no spaces
  const hasNoSpace = password.indexOf(" ") === -1;

  // no username
  const hasNoUserName = password.indexOf(username) === -1;

  return validLength && hasNoSpace && hasNoUserName;
}

console.log(isValidPassword("safdsfdafa", "umesh"));
console.log(isValidPassword(" s asssafasdff", "um"));
console.log(isValidPassword("asdfdafdfafasfafsa", "asdf"));

// Challenge 2: average
function avg(numbers) {
  let total = 0;
  for (num of numbers) {
    total += num;
  }
  return total / numbers.length;
}
console.log(avg([1, 2, 3, 4]));

// challenge 3: pangram
function isPangram(input) {
  input = input.toLowerCase();
  const alphabet = "abcdedfghijklmnopqrstuvwxyz";
  for (letter of alphabet) {
    if (input.indexOf(letter) === -1) {
      return false;
    }
  }
  return true;
}

const pangram1 = "Sphinx of black quartz, judge my vow.";
console.log(isPangram(pangram1));
console.log(isPangram("Hello, world!"));

// challenge 4: get card
console.log("Get card");

function pickRandFromArray(arr) {
  const idx = Math.floor(Math.random() * arr.length);
  return arr[idx];
}

function getCard() {
  const numbers = [
    "A",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  const suites = ["clubs", "spades", "hearts", "diamonds"];

  return {
    value: pickRandFromArray(numbers),
    suit: pickRandFromArray(suites)
  };
}

for (let i = 0; i < 10; i++) {
  console.log(getCard());
}
