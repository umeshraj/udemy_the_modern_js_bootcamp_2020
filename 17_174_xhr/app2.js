fetch("https://pokeapi.co/api/v2/pokemon/ditto/")
  .then((response) => {
    // console.log(response);
    if (!response.ok) {
      //   console.log("ERROR. 404", response.status);
      throw new Error(`Status code Error: ${response.status}`);
    } else {
      response.json().then((data) => console.log(data));
    }
  })
  .catch((err) => {
    console.log("SOMETHING WENT WRONG", err);
  });
