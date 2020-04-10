const checkStatusAndParse = (response) => {
  if (!response.ok) {
    //   console.log("ERROR. 404", response.status);
    throw new Error(`Status code Error: ${response.status}`);
  } else {
    return response.json();
  }
};

const printPlanets = (data) => {
  console.log("Fetched first pokemon");
  console.log(data);

  //   Clunky way
  //   const p = new Promise((resolve, reject) => {
  //     resolve(data);
  //   });
  //   return p;
  const filmurl = data["species"]["url"];
  return Promise.resolve(filmurl);
};

const fetchNextUrl = (url) => {
  return fetch(url);
};

fetch("https://pokeapi.co/api/v2/pokemon/ditto/")
  .then(checkStatusAndParse)
  .then(printPlanets)
  .then(fetchNextUrl)
  .then(checkStatusAndParse)
  .then((data) => {
    console.log("Fetched first pokemon's info");
    console.log(data);
  })
  .catch((err) => {
    console.log("SOMETHING WENT WRONG", err);
  });
