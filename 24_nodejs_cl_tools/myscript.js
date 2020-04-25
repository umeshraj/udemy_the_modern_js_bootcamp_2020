// const message = "hi there!";
// module.exports = message;

// files get required only once
let counter = 0;
module.exports = {
  incrementCounter() {
    counter += 1;
  },
  getCounter() {
    return counter;
  },
};
