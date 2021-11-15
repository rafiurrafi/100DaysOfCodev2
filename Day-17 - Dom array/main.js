const main = document.querySelector("#main");
const addUser = document.querySelector("#add-user");
const showMillionaries = document.querySelector("#show-millionaries");
const sort = document.querySelector("#sort");
const caleculateWealth = document.querySelector("#calculate-wealth");

const data = [];

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
}
