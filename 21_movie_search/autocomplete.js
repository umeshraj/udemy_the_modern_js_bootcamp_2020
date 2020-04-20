const createAutoComplete = ({
  root,
  renderOption,
  onOptionSelect,
  inputValue,
}) => {
  root.innerHTML = `
  <label><b>Search for a movie</b></label>
  <input class="input" />
  <div class="dropdown">
    <div class="dropdown-menu">
      <div class="dropdown-content results">
      </div>
    </div>
  </div>
`;
  const input = root.querySelector("input");
  const dropdown = root.querySelector(".dropdown");
  const resultsWrapper = root.querySelector(".results");

  const onInput = async (event) => {
    const movies = await fetchData(event.target.value);
    // console.log(movies);

    // close dropdown if no results
    if (!movies.length) {
      dropdown.classList.remove("is-active");
      return;
    }
    // clear existing dropdown
    resultsWrapper.innerHTML = "";
    dropdown.classList.add("is-active");
    for (let movie of movies) {
      const option = document.createElement("a");

      option.classList.add("dropdown-item");
      option.innerHTML = renderOption(movie);

      // handle click on option
      option.addEventListener("click", () => {
        dropdown.classList.remove("is-active");
        input.value = inputValue(movie);
        onOptionSelect(movie);
      });
      resultsWrapper.appendChild(option);
    }
  };
  input.addEventListener("input", debounce(onInput, 1000));

  // close the dropdown
  document.addEventListener("click", (event) => {
    if (!root.contains(event.target)) {
      dropdown.classList.remove("is-active");
    }
  });
};
