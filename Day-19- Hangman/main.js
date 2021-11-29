const wordEl = document.querySelector("#word");
const wordLettersEl = document.querySelector(".wrong-letter");
const playAgainBtn = document.querySelector("#play-button");
const popup = document.querySelector("#popup-container");
const notification = document.querySelector("#notification-container");
const finalMessage = document.querySelector("#final-message");
const figureParts = document.querySelectorAll(".figure-part");

const words = ["Application", "programming", "interface", "apple"];

const selectedWord = words[Math.floor(Math.random() * words.length)];

const correctedLetters = ["a", "p", "p", "l", "e"];
const worngLetters = [];

// show hidden word
function displayWord() {
  wordEl.innerHTML = `
    ${selectedWord
      .split("")
      .map(
        (letter) =>
          `<span class="letter">
          ${correctedLetters.includes(letter) ? letter : ""}
        </span>`
      )
      .join("")}
    `;
  const innerWords = wordEl.innerText.replace(/\n/g, "");
  console.log(selectedWord, innerWords);
  if (innerWords === selectedWord) {
    finalMessage.innerHTML = "You've won 😁";
    popup.style.display = "flex";
  }
}
displayWord();
