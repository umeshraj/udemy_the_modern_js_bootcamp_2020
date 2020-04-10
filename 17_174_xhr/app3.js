axios
  .get("https://pokeapi.co/api/v2/pokemon/ditto/dfs")
  .then((res) => {
    console.log(res.data);
  })
  .catch((err) => {
    console.log("In my error catcher");
    console.log(err);
  });
