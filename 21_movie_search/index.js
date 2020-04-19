const fetchData = async (searchTerm) => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: apikey,
      s: searchTerm,
    },
  });
  // console.log(response.data);

  // handle cases with no result found
  if (response.data.Error) {
    return [];
  }
  return response.data.Search;
};

const root = document.querySelector(".autocomplete");
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
const input = document.querySelector("input");
const dropdown = document.querySelector(".dropdown");
const resultsWrapper = document.querySelector(".results");

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
    // check if image src is n/a
    const imgSrc = movie.Poster === "N/A" ? "" : movie.Poster;

    option.classList.add("dropdown-item");
    option.innerHTML = `
      <img src="${imgSrc}"/>
      ${movie.Title}
    `;

    // handle click on option
    option.addEventListener("click", () => {
      dropdown.classList.remove("is-active");
      input.value = movie.Title;
      onMovieSelect(movie);
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

// on movie select
const onMovieSelect = async (movie) => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: apikey,
      i: movie.imdbID,
    },
  });
  // console.log(response.data);
  document.querySelector("#summary").innerHTML = movieTemplate(response.data);
};

const movieTemplate = (movieDetail) => {
  return `
  <article class="media">
  <figure class="media-left">
    <p class="image">
      <img src="${movieDetail.Poster}" alt="" />
    </p>
  </figure>
  <div class="media-content">
    <div class="content">
      <h1>${movieDetail.Title}</h1>
      <h4>${movieDetail.Genre}</h4>
      <p>${movieDetail.Plot}</p>
    </div>
  </div>
</article>


<article class="notification is-primary">
  <p class="title">
    ${movieDetail.Awards}
  </p>
  <p class="subtitle">Awards</p>
</article>

<article class="notification is-primary">
  <p class="title">
    ${movieDetail.BoxOffice}
  </p>
  <p class="subtitle">Box Office</p>
</article>

<article class="notification is-primary">
  <p class="title">
    ${movieDetail.Metascore}
  </p>
  <p class="subtitle">Metascore</p>
</article>

<article class="notification is-primary">
  <p class="title">
    ${movieDetail.imdbRating}
  </p>
  <p class="subtitle">IMDB Rating</p>
</article>

<article class="notification is-primary">
  <p class="title">
    ${movieDetail.imdbVotes}
  </p>
  <p class="subtitle">IMDB Votes</p>
</article>

`;
};
