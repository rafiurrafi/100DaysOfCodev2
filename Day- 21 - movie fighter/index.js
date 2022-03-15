const fetchData = async (searchTerm) => {
  const { data } = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "22ce8a24",
      s: searchTerm,
    },
  });
  console.log(data);
};

const input = document.querySelector("input");

const debounce = (callback) => {
  let timerId;
  return (...args) => {
    if (timerId) clearInterval(timerId);
    timerId = setTimeout(() => {
      callback.apply(null, args);
    }, 1000);
  };
};

const onInput = (event) => {
  fetchData(event.target.value);
};
input.addEventListener("input", debounce(onInput));
