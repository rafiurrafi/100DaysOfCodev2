const main = document.querySelector("#main");
const addUserBtn = document.querySelector("#add-user");
const doubleBtn = document.querySelector("#double");
const showMillionariesBtn = document.querySelector("#show-millionaries");
const sortBtn = document.querySelector("#sort");
const caleculateWealthBtn = document.querySelector("#calculate-wealth");

let data = [];

getRandomUser();
getRandomUser();
getRandomUser();

//fetch data
async function getRandomUser() {
  const response = await fetch("https://randomuser.me/api");
  const data = await response.json();

  const user = data.results[0];
  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 1000000),
  };
  addData(newUser);
}

function addData(user) {
  data.push(user);

  updateDOM();
}

function updateDOM(providedData = data) {
  main.innerHTML = ` <h2><strong>Person</strong> Wealth</h2>`;
  providedData.forEach((item) => {
    const element = document.createElement("div");
    element.classList.add("person");
    element.innerHTML = `<strong>${item.name}</strong> ${formateMoney(
      item.money
    )}`;
    main.appendChild(element);
  });
}
function formateMoney(money) {
  return "$" + money + ".00";
}

function doubleMoney() {
  data = data.map((user) => ({ ...user, money: user.money * 2 }));
  updateDOM();
}
function sortByIncrese() {
  data.sort((a, b) => b.money - a.money);
  updateDOM();
}
function showMillionaries() {
  data = data.filter((user) => user.money > 1000000);
  updateDOM();
}
function calculateTotal() {
  const total = data.reduce((acc, num) => acc + num.money, 0);
  console.log(total);
}
addUserBtn.addEventListener("click", getRandomUser);
doubleBtn.addEventListener("click", doubleMoney);
sortBtn.addEventListener("click", sortByIncrese);
showMillionariesBtn.addEventListener("click", showMillionaries);
caleculateWealthBtn.addEventListener("click", calculateTotal);
