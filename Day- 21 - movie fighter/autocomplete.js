function createAutoComplete({
  root,
  renderOption,
  onOptionSelect,
  inputValue,
  fetchDate,
}) {
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
    const items = await fetchDate(event.target.value);

    if (!items.length) {
      dropdown.classList.remove("is-active");
      return;
    }
    //   if (!movies) return;
    resultWrapper.innerHTML = "";
    dropdown.classList.add("is-active");
    for (let item of items) {
      const option = document.createElement("a");
      option.classList.add("dropdown-item");
      option.innerHTML = renderOption(item);
      option.addEventListener("click", () => {
        dropdown.classList.remove("is-active");
        input.value = inputValue(item);
        //make request
        onOptionSelect(item.imdbID);
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
