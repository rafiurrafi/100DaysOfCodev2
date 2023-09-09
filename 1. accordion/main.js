//create a dom with all styles height width bgColor position
// add click functionality
// add time later
createElement();

function createElement() {
  const box = document.createElement("div");
  box.classList.add("box");
  box.style.height = 100 + "px";
  box.style.top = 100 + "px";
  box.style.width = 100 + "px";
  box.style.left = 100 + "px";
  box.style.borderRadius = 10 + "px";
  box.style.position = "absolute";
  box.style.backgroundColor = "crimson";
  box.addEventListener("click", updateBox);
  document.body.appendChild(box);
}
function updateBox(e) {
  document.body.removeChild(e.target);
  setTimeout(() => {
    createElement();
  }, 500);
}
