function getData() {
  return axios.get("https://jsonplaceholder.typicode.com/todos/1");
}

getData().then((res) => {
  console.log(res.data);
});
