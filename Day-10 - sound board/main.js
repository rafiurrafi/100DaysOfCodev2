const submitButton = document.querySelector("input[type = 'submit']");

const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");
const emailInput = document.querySelector("#email");
const confirmPasswordInput = document.querySelector("#confirm-password");

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (usernameInput.value.length > 3) {
    usernameInput.className = "right-input";
  } else {
    usernameInput.className = "wrong-input";
  }
});
