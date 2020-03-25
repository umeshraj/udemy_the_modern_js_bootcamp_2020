function rollDie() {
  let roll = Math.floor(Math.random() * 6) + 1;
  return roll;
}

function throwDice() {
  for (let i = 0; i < 10; i++) {
    console.log(rollDie());
  }
}

throwDice();
