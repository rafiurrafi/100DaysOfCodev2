const gameArea = document.querySelector(".game");
const button = document.querySelector("button");
let gameStart = false,
  winCondition = 0;

function inputMaker() {
  for (let i = 0; i < 4; i++) {
    const input = document.createElement("input");
    input.min = 0;
    input.max = 9;
    input.size = 1;
    input.order = 0;
    input.correct = Math.floor(Math.random() * 10);
    input.value = input.correct;
    input.style.width = "40px";
    input.style.height = "40px";
    input.style.fontSize = "20px";
    input.style.textAlign = "center";
    input.setAttribute("type", "number");
    gameArea.appendChild(input);
  }
}

button.addEventListener("click", () => {
  if (!gameStart) {
    gameStart = true;
    inputMaker();
    button.textContent = "Check number";
  } else {
    const numbers = document.querySelectorAll("input");
    numbers.forEach((number) => {
      if (number.value == number.correct) {
        number.style.backgroundColor = "green";
        number.style.color = "white";
        winCondition++;
      } else {
        let color = number.correct < number.value ? "blue" : "red";
        number.style.backgroundColor = color;
        number.style.color = "white";
      }
      if (winCondition === numbers.length) console.log("Win");
    });
  }
});
