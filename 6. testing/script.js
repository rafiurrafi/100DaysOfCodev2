const googleDatabase = [
  "cats.com",
  "aniamls.com",
  "supercats.com",
  "rolex.com",
  "burgerking.com",
  "cathungry.com",
];

const googleSearch = (db, input) => {
  if (db === undefined || db === null) return [];
  return db.filter((data) => data.includes(input));
};
const result = googleSearch(googleDatabase, "cat");
console.log(result);

module.exports = googleSearch;
