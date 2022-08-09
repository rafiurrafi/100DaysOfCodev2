const googleDatabase = ["nokia.com", "samsung.com", "readme.com", "realme.com"];
const googleSearch = (searchInput, db) => {
  const matches = db.filter((website) => website.includes(searchInput));
  return matches.length > 3 ? matches.splice(0, 3) : matches;
};

console.log(googleSearch("rea"));
module.exports = googleDatabase;
