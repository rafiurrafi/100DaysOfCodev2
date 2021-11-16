const main = document.querySelector("#main");
const addUserBtn = document.querySelector("#add-user");
const doubleBtn = document.querySelector("#double");
const showMillionariesBtn = document.querySelector("#show-millionaries");
const sortBtn = document.querySelector("#sort");
const caleculateWealthBtn = document.querySelector("#calculate-wealth");

let data = [];

//initial loaded data
getRandomUser();
getRandomUser();
getRandomUser();

async function getRandomUser() {
  const response = await fetch("https://randomuser.me/api");
  const data = await response.json();
  const user = data.results[0];
  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: getRandomMoney(),
  };

  addUser(newUser);
}
function addUser(user) {
  data.push(user);
  updateDOM();
}
function doubleMoney() {
  data = data.map((user) => ({ ...user, money: user.money * 2 }));
  updateDOM();
}
function sortByRichest() {
  data.sort((a, b) => b.money - a.money);
  updateDOM();
}
function showMillionaries() {
  data = data.filter((user) => user.money > 1000000);
  updateDOM();
}
function calculateWealth() {
  var total = data.reduce((acc, num) => (acc += num.money), 0);
  console.log(total);
}
function updateDOM() {
  main.innerHTML = ` <h2><strong>Person</strong> Wealth</h2>`;
  data.forEach((user) => {
    const element = document.createElement("div");
    element.classList.add("person");
    element.innerHTML = `<strong>${user.name}</strong> ${user.money}`;
    main.appendChild(element);
  });
}
function getRandomMoney() {
  return Math.floor(Math.random() * 100000);
}
addUserBtn.addEventListener("click", getRandomUser);
doubleBtn.addEventListener("click", doubleMoney);
sortBtn.addEventListener("click", sortByRichest);
showMillionariesBtn.addEventListener("click", showMillionaries);
caleculateWealthBtn.addEventListener("click", calculateWealth);
