const button = document.querySelector("button");
const userInput = document.querySelector("#username");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const passwordInput2 = document.querySelector("#password2");

button.addEventListener("click", (e) => {
  e.preventDefault();
  // if (userInput.value == "") showError(userInput, "Username cannot be empty");
  // else showSuccess(userInput);
  // if (emailInput.value == "") showError(emailInput, "email cannot be empty");
  // else showSuccess(emailInput);
  // if (password.value == "") showError(password, "Password cannot be empty");
  // else showSuccess(password);
  // if (passwordInput2.value == "")
  //   showError(passwordInput2, "password2 cannot be empty");
  // else showSuccess(passwordInput2);
  checkRequired([userInput, emailInput, passwordInput, passwordInput2]);
  checkLength(userInput, 3, 15);
});

function showError(input, msg) {
  const parent = input.parentNode;
  const small = parent.querySelector("small");
  parent.className = "form-control error";
  small.textContent = msg;
  console.log(parent);
}
function showSuccess(input) {
  const parent = input.parentNode;
  parent.className = "form-control success";
}

function checkRequired(inputs) {
  inputs.map((input) => {
    if (input.value.trim() == "")
      showError(input, getFieldName(input) + " is empty");
    else showSuccess(input);
  });
}
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
function checkLength(input, min, max) {
  if (input.value.length < min)
    showError(
      input,
      getFieldName(input) + " should at least " + min + " character"
    );
  else if (input.value.length > max)
    showError(
      input,
      getFieldName(input) + " should less than " + max + " character"
    );
  else showSuccess(input);
}
