const getPlanet = () => {
  const planets = fetch("https://swapi.dev/api/planets/")
    .then((response) => response.json)
    .then((data) => data);
  return planets;
};
console.log(getPlanet());
