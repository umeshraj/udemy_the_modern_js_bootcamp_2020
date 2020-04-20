const autoCompleteConfig = {
  renderOption(movie) {
    // check if image src is n/a
    const imgSrc = movie.Poster === "N/A" ? "" : movie.Poster;
    return `
    <img src="${imgSrc}"/>
    ${movie.Title} (${movie.Year})
  `;
  },

  inputValue(movie) {
    return movie.Title;
  },

  async fetchData(searchTerm) {
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
  },
};

// create left search
createAutoComplete({
  ...autoCompleteConfig,
  root: document.querySelector("#left-autocomplete"),
  onOptionSelect(movie) {
    document.querySelector(".tutorial").classList.add("is-hidden");
    onMovieSelect(movie, document.querySelector("#left-summary"), "left");
  },
});

// create right search
createAutoComplete({
  ...autoCompleteConfig,
  root: document.querySelector("#right-autocomplete"),
  onOptionSelect(movie) {
    document.querySelector(".tutorial").classList.add("is-hidden");
    onMovieSelect(movie, document.querySelector("#right-summary"), "right");
  },
});

// for compare
let leftMovie;
let rightMovie;

// on movie select
const onMovieSelect = async (movie, summaryElement, side) => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: apikey,
      i: movie.imdbID,
    },
  });
  // console.log(response.data);
  summaryElement.innerHTML = movieTemplate(response.data);

  // update for compare
  if (side === "left") {
    leftMovie = response.data;
  } else {
    rightMovie = response.data;
  }
  if (leftMovie && rightMovie) {
    runComparison();
  }
};

const runComparison = () => {
  console.log("Ready to compare");
};

const movieTemplate = (movieDetail) => {
  const dollars = parseInt(
    movieDetail.BoxOffice.replace(/\$/g, "").replace(/,/g, "")
  );
  const metascore = parseInt(movieDetail.Metascore);
  const imdbRating = parseFloat(movieDetail.imdbRating);
  const imdbVotes = parseInt(movieDetail.imdbVotes.replace(/,/g, ""));
  console.log(dollars, metascore, imdbRating, imdbVotes);

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
