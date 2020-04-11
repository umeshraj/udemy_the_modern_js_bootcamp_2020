// function getData() {
//   return axios.get("https://jsonplaceholder.typicode.com/todos/1");
// }

// getData().then((res) => {
//   console.log(res.data);
// });

// new way with async/await
// async function getData() {
//   const res = await axios.get("https://jsonplaceholder.typicode.com/todosas/1");
//   console.log(res.data);
// }
// getData().catch((err) => {
//   console.log("FAILED!" + err);
// });

async function getData() {
  try {
    const res = await axios.get(
      "https://jsonplaceholder.typicode.com/todosas/1"
    );
    console.log(res.data);
  } catch (e) {
    console.log("IN CATCH!!");
    console.log(e);
  }
}
getData();
