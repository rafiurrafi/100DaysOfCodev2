const wordEl = document.querySelector("#word");
const wordLettersEl = document.querySelector(".wrong-letter");
const playAgainBtn = document.querySelector("#play-button");
const popup = document.querySelector("#popup-container");
const notification = document.querySelector("#notification-container");
const finalMessage = document.querySelector("#final-message");
const figureParts = document.querySelectorAll(".figure-part");

const words = ["Application", "programming", "interface", "apple"];

const selectedWord = words[Math.floor(Math.random() * words.length)];

const correctedLetters = [];
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

//keydown letter press
window.addEventListener("keydown", (e) => {
  if (e.keyCode >= 65 && e.keyCode <= 90) {
    const letter = e.key;
    if (selectedWord.includes(letter)) {
      if (!correctedLetters.includes(letter)) {
        correctedLetters.push(letter);
        displayWord();
      } else {
        showNotification();
      }
    } else {
      if (!worngLetters.includes(letter)) {
        worngLetters.push(letter);
        updateWrongLetterEl();
      } else {
        showNotification();
      }
    }
  }
});
displayWord();

//function update the wrong letters
function updateWrongLetterEl() {
  console.log("Wrong letters");
}
function showNotification() {
  notification.classList.add("show");
  setTimeout(() => {
    notification.classList.remove("show");
  }, 2000);
}
