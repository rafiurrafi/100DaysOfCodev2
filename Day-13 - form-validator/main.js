const button = document.querySelector("button");
const userInput = document.querySelector("#username");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const passwordInput2 = document.querySelector("#password2");
button.addEventListener("click", (e) => {
  e.preventDefault();
  if (userInput.value == "") showError(userInput, "Username is Empty");
  else showSuccess(userInput);
  if (emailInput.value == "") showError(emailInput, "Email is Empty");
  else if (!isValidateEmail(emailInput.value))
    showError(emailInput, "Email is not valid");
  else showSuccess(emailInput);
  if (passwordInput.value == "") showError(passwordInput, "Password is Empty");
  else showSuccess(passwordInput);
  if (passwordInput2.value == "")
    showError(passwordInput2, "Password is Empty");
  else showSuccess(passwordInput2);
});
function showError(input, msg) {
  const formControl = input.parentNode;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.textContent = msg;
}
function showSuccess(input) {
  const formControl = input.parentNode;
  formControl.className = "form-control success";
}
function isValidateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
// function isEmpty(input) {
//   return !input.value.length;
// }
// function isMinimumLength(input, length) {
//   if (input.value.length >= length) return true;
//   return false;
// }
// function isPasswordMatch(password1, password2) {
//   if (password1.value == password2.value) return true;
//   else return false;
// }
// function validateUsername() {
//   if (isEmpty(userInput)) {
//     const userParent = userInput.parentNode;
//     const small = document.querySelector("." + userParent.className + " small");
//     small.innerHTML = "Username is empty";
//     userParent.className = "form-control error";
//   } else if (isMinimumLength(userInput, 6)) {
//     const userParent = userInput.parentNode;
//     const small = document.querySelector("." + userParent.className + " small");
//     small.innerHTML = "Username is less than 6";
//     userParent.className = "form-control error";
//   }
// }
