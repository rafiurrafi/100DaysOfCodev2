// const btn = document.getElementById("btn");
const btn = document.querySelector("#btn")!;
const input = document.querySelector("#input")! as HTMLInputElement;
(<HTMLInputElement>input).value;
btn.addEventListener("click", function () {
  console.log("Clicked");
});
