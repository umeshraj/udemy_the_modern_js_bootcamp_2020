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
  return x + y;
}
