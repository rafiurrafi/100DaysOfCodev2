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
    resultWrapper.appendChild(option);
  }
};

const firstMovieInput = document.querySelector(".input");

firstMovieInput.addEventListener("input", debounce(onInput));
