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
