const googleDatabase = [
  "cats.com",
  "aniamls.com",
  "supercats.com",
  "rolex.com",
  "burgerking.com",
  "cathungry.com",
];

const googleSearch = (input) => {
  return googleDatabase.filter((data) => data.includes(input));
};
const result = googleSearch("cat");
console.log(result);
