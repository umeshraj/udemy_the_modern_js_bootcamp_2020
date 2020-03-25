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
