//create a dom with all styles height width bgColor position
// add click functionality
// add time later
createElement();

function createElement() {
  const box = document.createElement("div");
  box.classList.add("box");
  box.style.height = getRandomValue(70) + 50 + "px";
  box.style.top = getRandomValue(70) + 50 + "px";
  box.style.width = getRandomValue(70) + 50 + "px";
  box.style.left = getRandomValue(70) + 50 + "px";
  box.style.borderRadius = getRandomValue(40) + "px";
  box.style.position = "absolute";
  box.style.backgroundColor = "crimson";
  box.time = new Date().getTime();
  box.addEventListener("click", updateBox);
  document.body.appendChild(box);
}
function getRandomValue(limit) {
  return Math.floor(Math.random() * limit);
}
function updateBox(e) {
  document.body.removeChild(e.target);
  const endTime = new Date().getTime();
  const duration = (endTime - e.target.time) / 1000;
  console.log(duration);
  setTimeout(() => {
    createElement();
  }, getRandomValue(3000));
}
