it("Shows an autocomplete!", () => {
  createAutoComplete({
    root: document.querySelector("#target"),
    fetchData() {
      return [
        { Title: "Avengers" },
        { Title: "Not Avengers" },
        { Title: "Other movie" },
      ];
    },
    renderOption(movie) {
      return movie.Title;
    },
  });
});
