fetch("https://pokeapi.co/api/v2/pokemon/ditto/")
  .then((response) => {
    // console.log(response);
    if (!response.ok) {
      //   console.log("ERROR. 404", response.status);
      throw new Error(`Status code Error: ${response.status}`);
    } else {
      return response.json();
    }
  })
  .then((data) => {
    console.log("Fetched first pokemon");
    const filmurl = data["species"]["url"];
    return fetch(filmurl);
  })
  .then((response) => {
    // console.log(response);
    if (!response.ok) {
      //   console.log("ERROR. 404", response.status);
      throw new Error(`Status code Error: ${response.status}`);
    } else {
      return response.json();
    }
  })
  .then((data) => {
    console.log("Fetched first pokemon's info");
    console.log(data);
  })
  .catch((err) => {
    console.log("SOMETHING WENT WRONG", err);
  });
