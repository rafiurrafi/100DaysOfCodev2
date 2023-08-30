const googleData = [
  "cat.com",
  "catland.com",
  "bull.com",
  "redbull.com",
  "catfighter.com",
  "catfish.com",
];

const googleSearch = (db, input) => {
  const result = db.filter((data) => data.includes(input));
  return result.length > 3 ? result.slice(0, 3) : result;
};

module.exports = googleSearch;
