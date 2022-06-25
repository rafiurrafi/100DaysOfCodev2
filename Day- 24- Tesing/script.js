const meals = [
  "rice",
  "meat",
  "beef",
  "chicken",
  "chicken tanduri",
  "chicken sizzling",
  "chicken curry",
];
const searchMeal = (item, db) => {
  const items = db.filter((meal) => meal.includes(item));
  return items.length > 3 ? items.slice(0, 3) : items;
};
module.exports = searchMeal;
