const key = document.querySelector("#key");
const keyCode = document.querySelector("#keyCode");
const code = document.querySelector("#code");
window.addEventListener("keyup", (e) => {
  key.innerHTML = e.key;
  keyCode.innerHTML = e.keyCode;
  code.innerHTML = e.code;
});
