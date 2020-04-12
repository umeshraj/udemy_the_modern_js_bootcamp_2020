String.prototype.yell = function () {
  // console.log(this);
  console.log(`OMG!! ${this.toUpperCase()}!! AARRGGG!!`);
};

"hello".yell();

// replace
Array.prototype.popNo = function () {
  console.log("Sorry. I need that element. ");
};
[1, 2, 3].pop();
