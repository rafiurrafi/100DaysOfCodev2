const answers = [
  "yes,sure",
  "no man",
  "Exactly found ",
  "Good question",
  "Beautiful eys",
];
const button = document.querySelector("button");
const input = document.querySelector("input");
const answerEl = document.querySelector("#message");
function getRandomNumber() {
  return Math.floor(Math.random() * answers.length);
}
function getRandomAnswer(answers) {
  const randomNumber = getRandomNumber();
  return answers[randomNumber];
}
input.addEventListener("keydown", function () {
  answerEl.textContent = "";
});
button.addEventListener("click", function () {
  // check input value
  if (input.value.length < 5) {
    answerEl.textContent = "Ask valid ques";
    return;
  }
  // get random value
  const answer = getRandomAnswer(answers);

  //show to screen
  answerEl.textContent = answer;
  input.value = "";
});
