const fetchData = async (searchTerm) => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: apikey,
      //   i: "tt0848228",
      s: searchTerm,
    },
  });
  console.log(response.data);
};

const input = document.querySelector("input");
input.addEventListener("input", (event) => {
  console.log(event.target.value);
});
