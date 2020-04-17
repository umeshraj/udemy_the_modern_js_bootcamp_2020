const fetchData = async () => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: apikey,
      i: "tt0848228",
      //   s: "avengers",
    },
  });
  console.log(response.data);
};

fetchData();
