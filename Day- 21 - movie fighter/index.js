async function fetchDate(searchTerm) {
  const { data } = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "22ce8a24",
      s: searchTerm,
    },
  });
  if (data.Error) return [];
  return data.Search;
}

const root = document.querySelector(".autocomplete");

root.innerHTML = `
  <label><b>Search For a Movie </b></label>
  <input class = "input" />
  <div class = "dropdown">
    <div class = "dropdown-menu">
      <div class = "dropdown-content results"></div>
    </div>
  </div>
`;
const input = document.querySelector(".input");
const dropdown = document.querySelector(".dropdown");
const resultWrapper = document.querySelector(".results");

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
    option.innerHTML = `
        <img src = "${movie.Poster === "N/A" ? "" : movie.Poster}" />
        <h1>${movie.Title}</h1>
      `;
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

//helper function
async function onMovieSelect(movieId) {
  const movie = await axios.get("http://www.omdbapi.com", {
    params: {
      apikey: "22ce8a24",
      i: movieId,
    },
  });
  console.log(movie);
  document.querySelector("#summary").innerHTML = movieTemplate(movie.data);
}

const movieTemplate = (movie) => {
  return `
  <article class="media">
      <figure class="media-left">
        <p class="img">
          <img src="${movie.Poster}" alt="">
        </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <h3>${movie.Title}</h3>
        </div>
      </div>
    </article>
  `;
};
