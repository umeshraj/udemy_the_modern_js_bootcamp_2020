// explanation of this
// A: arrow function
// console.log(this);
// const printThis = () => {
//   console.log(this);
// };
// printThis();

// const colors = {
//   printColor() {
//     console.log(this);
//     const printThis = () => {
//       console.log(this);
//     };
//     printThis();
//   },
// };
// colors.printColor();

// B: bind, call, apply
// const printThis = function () {
//   console.log(this);
// };
// printThis();
// printThis.call({ color: "red" });

// C All other cases
const colors = {
  printColor() {
    console.log(this);
  },
};

colors.printColor();

const randomObject = {
  a: 1,
};
randomObject.printColor = colors.printColor;
randomObject.printColor();
