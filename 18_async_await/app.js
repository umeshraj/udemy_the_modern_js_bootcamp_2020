// function getData() {
//   const data = axios.get("https://jsonplaceholder.typicode.com/todos/1");
//   console.log(data);
// }

// getData();

async function greet() {
  return "hello";
}

greet().then((val) => {
  console.log("Promise resolved with " + val);
});

async function add(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    throw "x and y must be numbers";
  } else {
    return x + y;
  }
}

console.log(add(4, 5));
console.log(
  add("4", 5)
    .then((val) => {
      console.log("Promise resolved with " + val);
    })
    .catch((err) => {
      console.log("Promise reject with" + err);
    })
);

// rewriting with promises
function add2(x, y) {
  return new Promise((resolve, reject) => {
    if (typeof x !== "number" || typeof y !== "number") {
      reject("x and y must be numbers");
    } else {
      resolve(x + y);
    }
  });
}
