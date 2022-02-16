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

const onInput = async (event) => {
  const movies = await fetchDate(event.target.value);
  //   if (!movies) return;
  for (let movie of movies) {
    const div = document.createElement("div");
    div.innerHTML = `
        <img src = "${movie.Poster}" />
        <h1>${movie.Title}</h1>
      `;
    document.querySelector("#target").appendChild(div);
  }
};
const firstMovieInput = document.querySelector("#firstMovieInput");

firstMovieInput.addEventListener("input", debounce(onInput));
