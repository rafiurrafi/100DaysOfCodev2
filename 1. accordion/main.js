const showMessage = document.querySelector("#show-message");
const startScreen = document.querySelector(".start-screen");
const gameArea = document.querySelector(".game-area");

const player = { speed: 5 };

const keys = {
  ArrowLeft: false,
  ArrowUp: false,
  ArrowRight: false,
  ArrowDown: false,
};
function playGame() {
  const car = document.querySelector(".car");
  const road = gameArea.getBoundingClientRect();
  console.log(road);
  if (player.start) {
    if (keys.ArrowLeft && player.x > 0) player.x -= player.speed;
    if (keys.ArrowRight && player.x < 150) player.x += player.speed;
    if (keys.ArrowUp && player.y > road.y) player.y -= player.speed;
    if (keys.ArrowDown && player.y < road.height - 100)
      player.y += player.speed;

    car.style.left = player.x + "px";
    car.style.top = player.y + "px";

    requestAnimationFrame(playGame);
  }
}

function start() {
  gameArea.classList.remove("hide");
  startScreen.classList.add("hide");

  player.start = true;
  requestAnimationFrame(playGame);

  const car = document.createElement("div");
  car.innerText = "car";
  car.classList.add("car");
  gameArea.appendChild(car);
  player.x = car.offsetLeft;
  player.y = car.offsetTop;
  console.log(player);
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
