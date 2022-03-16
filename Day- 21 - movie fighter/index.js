const fetchData = async (searchTerm) => {
  const { data } = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "22ce8a24",
      s: searchTerm,
    },
  });
  if (data.Error) return [];
  return data.Search;
};

const root = document.querySelector(".autocomplete");
root.innerHTML = `
  <label>Enter a movie name</label>
  <input type = "text" class = "input" />
  <div class = "dropdown">
    <div class = "dropdown-menu">
      <div class = "dropdown-content result"></div>
    </div>
  </div>
`;

const input = document.querySelector("input");
const dropdown = document.querySelector(".dropdown");
const resultWrapper = document.querySelector(".result");

const onInput = async (event) => {
  const movies = await fetchData(event.target.value);

  resultWrapper.innerHTML = "";

  if (!movies.length) {
    dropdown.classList.remove("is-active");
    return;
  }
  dropdown.classList.add("is-active");
  for (let movie of movies) {
    const option = document.createElement("a");
    const imgSrc = movie.Poster === "N/A" ? "" : movie.Poster;
    option.classList.add("dropdown-item");
    option.innerHTML = `
      <img src = "${movie.Poster === "N/A" ? "" : movie.Poster}" />
      <h4>${movie.Title}</h4>
    `;
    option.addEventListener("click", () => {
      dropdown.classList.remove("is-active");
      input.value = movie.Title;
      onMovieSelect(movie);
    });
    resultWrapper.append(option);
  }
};
input.addEventListener("input", debounce(onInput));

document.addEventListener("click", (event) => {
  if (!root.contains(event.target)) dropdown.classList.remove("is-active");
});

async function onMovieSelect(movie) {
  const { data } = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "22ce8a24",
      i: movie.imdbID,
    },
  });
  document.querySelector("#summary").innerHTML = movieTemplate(data);
}
function movieTemplate(movie) {
  return `
    <article class="media">
      <figure class="media-left">
        <p class="image">
          <img src="${movie.Poster}" alt="">
        </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <h1>${movie.Title}</h1>
          <h4>${movie.Genre}</h4>
          <p>${movie.Plot}</p>
        </div>
      </div>
    </article>
  `;
}
