import fetch from "node-fetch";

const getPeople = (fetch) => {
  return fetch("https://swapi.co/api/people")
    .then((res) => res.json())
    .then((data) => ({
      count: data.count,
      result: data.result,
    }));
};

const getPeopleAwait = async (fetch) => {
  const response = await fetch("https://swapi.co/api/people");
  const data = await response.json();
};

module.export = {
  getPeople,
  getPeopleAwait,
};
