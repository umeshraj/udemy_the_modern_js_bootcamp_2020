const firstReq = new XMLHttpRequest();
firstReq.addEventListener("load", function () {
  console.log("It worked");
  const data = JSON.parse(this.responseText);
  console.log(data);
  for (let post of data) {
    console.log(post.userId);
  }
});
firstReq.addEventListener("error", () => {
  console.log("Error");
});

firstReq.open("GET", "https://jsonplaceholder.typicode.com/posts");
firstReq.send();
console.log("Request sent");
