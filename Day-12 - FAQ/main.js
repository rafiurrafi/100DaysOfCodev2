const h1 = document.querySelector("h1");
const button = document.querySelector("button");
let number = 0;
button.addEventListener("click", () => {
  number++;
  h1.textContent = number;
});
