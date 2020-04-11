function getData() {
  const data = axios.get("https://jsonplaceholder.typicode.com/todos/1");
  console.log(data);
}

getData();
