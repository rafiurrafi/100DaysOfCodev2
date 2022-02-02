const wordEl = document.querySelector("#word");
const wordLettersEl = document.querySelector(".wrong-letter");
const playAgainBtn = document.querySelector("#play-button");
const popup = document.querySelector("#popup-container");
const notification = document.querySelector("#notification-container");
const finalMessage = document.querySelector("#final-message");
const figureParts = document.querySelectorAll(".figure-part");

const words = ["application", "programming", "interface", "apple"];

let selectedWord = words[Math.floor(Math.random() * words.length)];

const correctedLetters = [];
const wrongLetters = [];
displayWord();
// show hidden word

function displayWord() {
  wordEl.innerHTML = `
    ${selectedWord
      .split("")
      .map(
        (letter) =>
          `<span class = "letter">${
            correctedLetters.includes(letter) ? letter : ""
          }</span>`
      )
      .join("")}
  `;
  const innerWords = wordEl.innerText.replace(/\n/g, "");
  if (innerWords === selectedWord) {
    finalMessage.innerHTML = "You've won 🤣";
    popup.style.display = "flex";
  }
}

//keydown letter press

window.addEventListener("keydown", (e) => {
  if (e.keyCode >= 65 && e.keyCode <= 90) {
    const letter = e.key;
    if (selectedWord.includes(letter)) {
      if (!correctedLetters.includes(letter)) {
        correctedLetters.push(letter);
        displayWord();
      } else showNotification();
    } else {
      if (!wrongLetters.includes(letter)) {
        wrongLetters.push(letter);
        updateWrongLetterEl();
      } else showNotification();
    }
  }
});
//function update the wrong letters

function updateWrongLetterEl() {
  wordLettersEl.innerHTML = `
    ${wrongLetters.length > 0 ? "<p>Wrong</p>" : ""}
    ${wrongLetters.map((letter) => `<span>${letter}</span>`)}
  `;
  figureParts.forEach((part, index) => {
    const errors = wrongLetters.length;
    if (index < errors) part.style.display = "block";
    else part.style.display = "none";

    if (wrongLetters.length === figureParts.length) {
      finalMessage.innerHTML = "Unfortunately, you lost 😭";
      popup.style.display = "flex";
    }
  });
}
function showNotification() {
  notification.classList.add("show");
  setTimeout(() => {
    notification.classList.remove("show");
  }, 2000);
}
// playAgainBtn.addEventListener("click", () => {
//   correctedLetters.splice(0);
//   wrongLetters.splice(0);
//   selectedWord = words[Math.floor(Math.random() * words.length)];
//   displayWord();
//   updateWrongLetterEl();
//   popup.style.display = "none";
// });
playAgainBtn.addEventListener("click", () => {
  correctedLetters.splice(0);
  wrongLetters.splice(0);
  selectedWord = words[Math.floor(Math.random() * words.length)];
  displayWord();
  updateWrongLetterEl();
  popup.style.display = "none";
});
