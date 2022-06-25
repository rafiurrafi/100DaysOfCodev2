const restaurants = [
  "martin.com",
  "rolex.com",
  "relax.com",
  "rolexDhaka.com",
  "rolexBiriany.com",
  "rolexTandur.com",
  "rolexDoiGhor.com",
];
const searchRestaurant = (searchQuery, db) => {
  const result = db.filter((restaurant) => restaurant.includes(searchQuery));
  return result.length > 3 ? result.slice(0, 3) : result;
};

module.exports = searchRestaurant;
