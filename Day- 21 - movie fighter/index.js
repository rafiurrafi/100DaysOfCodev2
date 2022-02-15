async function fetchDate(searchTerm) {
  const { data } = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "22ce8a24",
      s: searchTerm,
    },
  });
  console.log(data);
}

const onInput = (event) => fetchDate(event.target.value);
const firstMovieInput = document.querySelector("#firstMovieInput");

firstMovieInput.addEventListener("input", debounce(onInput));
