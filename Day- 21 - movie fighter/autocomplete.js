function createAutoComplete({ root, renderOption }) {
  root.innerHTML = `
  <label><b>Search For a Movie </b></label>
  <input class = "input" />
  <div class = "dropdown">
    <div class = "dropdown-menu">
      <div class = "dropdown-content results"></div>
    </div>
  </div>
`;
  const input = root.querySelector(".input");
  const dropdown = root.querySelector(".dropdown");
  const resultWrapper = root.querySelector(".results");

  const onInput = async (event) => {
    const movies = await fetchDate(event.target.value);

    if (!movies.length) {
      dropdown.classList.remove("is-active");
      return;
    }
    //   if (!movies) return;
    resultWrapper.innerHTML = "";
    dropdown.classList.add("is-active");
    for (let movie of movies) {
      const option = document.createElement("a");
      option.classList.add("dropdown-item");
      option.innerHTML = renderOption(movie);
      option.addEventListener("click", () => {
        dropdown.classList.remove("is-active");
        input.value = movie.Title;
        //make request
        onMovieSelect(movie.imdbID);
        //get data
        //render to site
      });
      resultWrapper.appendChild(option);
    }
  };

  const firstMovieInput = document.querySelector(".input");

  firstMovieInput.addEventListener("input", debounce(onInput));

  document.addEventListener("click", (event) => {
    if (!root.contains(event.target)) dropdown.classList.remove("is-active");
  });
}
