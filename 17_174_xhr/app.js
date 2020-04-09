const firstReq = new XMLHttpRequest();

firstReq.addEventListener("load", function () {
  console.log("First request worked");
  const data = JSON.parse(this.responseText);
  console.log(data);
  // for (let post of data) {
  //   console.log(post.title);
  // }

  const filmurl = data["species"]["url"];
  const filmReq = new XMLHttpRequest();

  filmReq.addEventListener("load", function () {
    console.log("Second request worked");
    const filmData = JSON.parse(this.responseText);
    console.log(filmData);
  });
  filmReq.addEventListener("error", function (e) {
    console.log("Trying second request");
    console.log("ERROR", e);
  });
  filmReq.open("GET", filmurl);
  filmReq.send();
});

firstReq.addEventListener("error", () => {
  console.log("Error");
});

firstReq.open("GET", "https://pokeapi.co/api/v2/pokemon/ditto/");
firstReq.send();
console.log("Request sent");
