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

createAutoComplete({
  root: document.querySelector(".autocomplete"),
  renderOptions(movie) {
    return `
      <img src = "${movie.Poster === "N/A" ? "" : movie.Poster}" />
      <h1>${movie.Title}</h1>
    `;
  },
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
    <article class="notification is-primary">
        <p class="title">${movie.Awards}</p>
        <p class="sub-title">Awards</p>
      </article>
      <article class="notification is-primary">
          <p class="title">${movie.BoxOffice}</p>
          <p class="sub-title">Awards</p>
        </article>
        <article class="notification is-primary">
            <p class="title">${movie.Metascore}</p>
            <p class="sub-title">Awards</p>
          </article>
          <article class="notification is-primary">
              <p class="title">${movie.imdbRating}</p>
              <p class="sub-title">Awards</p>
            </article>
            <article class="notification is-primary">
                <p class="title">${movie.imdbVotes}</p>
                <p class="sub-title">Awards</p>
              </article>
  `;
};
