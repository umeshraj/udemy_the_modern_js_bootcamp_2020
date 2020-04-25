// console.log("Hello, world!");
// const message = require("./myscript.js");
// console.log(message);

// console.log(arguments);
// console.log(require);
// console.log(__filename);

// require cache
// require("./myscript.js");
// console.log(require.cache);

// files get required only once
const counterObject = require("./myscript.js");
console.log(counterObject.getCounter());
counterObject.incrementCounter();
console.log(counterObject.getCounter());

const newCounterObject = require("./myscript.js");
console.log(newCounterObject.getCounter());
