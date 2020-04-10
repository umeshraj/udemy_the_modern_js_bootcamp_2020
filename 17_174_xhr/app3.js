axios
  .get("https://pokeapi.co/api/v2/pokemon/ditto/")
  .then(({ data }) => {
    console.log(data);
    const filmurl = data["species"]["url"];
    return axios.get(filmurl);
  })
  .then(({ data }) => {
    console.log(data);
  })
  .catch((err) => {
    console.log("In my error catcher");
    console.log(err);
  });
