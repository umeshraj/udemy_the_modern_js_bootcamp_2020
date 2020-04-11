// function getData() {
//   return axios.get("https://jsonplaceholder.typicode.com/todos/1");
// }

// getData().then((res) => {
//   console.log(res.data);
// });

// new way with async/await
async function getData() {
  const res = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
  console.log(res.data);
}
getData();
