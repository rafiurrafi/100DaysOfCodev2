import fetch from "node-fetch";
const getPlanet = (fetch) => {
  return fetch("https://swapi.dev/api/planets/")
    .then((response) => response.json)
    .then((data) => {
      console.log(data);
      return {
        planet: data.films,
      };
    });
};
console.log(getPlanet(fetch));
