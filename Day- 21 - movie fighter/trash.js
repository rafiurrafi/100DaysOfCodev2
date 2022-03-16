const fetchData = async (searchTerm) => {
  const { data } = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "22ce8a24",
      s: searchTerm,
    },
  });
  return data;
};

const input = document.querySelector("input");

const onInput = async (event) => {
  await fetchData(event.target.value);
};
input.addEventListener("input", debounce(onInput));
