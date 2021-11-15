const main = document.querySelector("#main");
const addUserBtn = document.querySelector("#add-user");
const showMillionariesBtn = document.querySelector("#show-millionaries");
const sortBtn = document.querySelector("#sort");
const caleculateWealthBtn = document.querySelector("#calculate-wealth");

const data = [];

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

addUserBtn.addEventListener("click", getRandomUser);
