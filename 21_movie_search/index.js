const fetchData = async (searchTerm) => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: apikey,
      s: searchTerm,
    },
  });
  console.log(response.data);
};

const input = document.querySelector("input");

const debounce = (func, delay = 1000) => {
  // debounce decides how often func can be invoked
  let timeoutId;
  return (...args) => {
    if (timeoutId) {
      clearInterval(timeoutId);
    }
    timeoutId = setTimeout(() => {
      // func(arg);
      func.apply(null, args);
    }, delay);
  };
};

const onInput = (event) => {
  fetchData(event.target.value);
};
input.addEventListener("input", debounce(onInput, 1000));
