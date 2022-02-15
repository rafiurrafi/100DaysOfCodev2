async function fetchDate(searchTerm) {
  const { data } = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "22ce8a24",
      s: searchTerm,
    },
  });
  console.log(data);
}
fetchDate();
