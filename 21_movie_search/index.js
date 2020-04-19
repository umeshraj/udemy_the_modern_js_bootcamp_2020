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

// create first search
createAutoComplete({
  root: document.querySelector(".autocomplete"),
});
// create second search
createAutoComplete({
  root: document.querySelector(".autocomplete-two"),
});
// create third search
createAutoComplete({
  root: document.querySelector(".autocomplete-three"),
});

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
