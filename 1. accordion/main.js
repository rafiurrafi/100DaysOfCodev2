const showMessage = document.querySelector("#show-message");
const startScreen = document.querySelector(".start-screen");
const gameArea = document.querySelector(".game-area");

const player = {};

const keys = {
  ArrowLeft: false,
  ArrowUp: false,
  ArrowRight: false,
  rrowDown: false,
};
function playGame() {
  console.log("inplay");
  if (player.start) requestAnimationFrame(playGame);
}

function start() {
  gameArea.classList.remove("hide");
  startScreen.classList.add("hide");

  player.start = true;
  requestAnimationFrame(playGame);

  const car = document.createElement("div");
  car.innerText = "car";
  gameArea.appendChild(car);
}

function keyDownHandler(e) {
  e.preventDefault();
  keys[e.key] = true;
  console.log(keys);
}
function keyUpHandler(e) {
  e.preventDefault();
  keys[e.key] = false;
  console.log(keys);
}

document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);
startScreen.addEventListener("click", start);
