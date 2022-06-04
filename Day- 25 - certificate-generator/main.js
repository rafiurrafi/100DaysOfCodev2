const playground = document.querySelector(".playground");
const addTextBtn = document.querySelector("#add-text");
const textInput = document.querySelector("#input-text");
const updateTextBtn = document.querySelector("#update-text-btn");

const select = document.querySelector(".select");
const selectOptionsContainer = document.querySelectorAll(".select__options");
const selectOptions = document.querySelectorAll(".select__options li");
const selectText = document.querySelector(".select > p");

let holder = {};
let selected = {};
addTextBtn.addEventListener("click", () => {
  const p = document.createElement("p");
  p.textContent = "Hello" + Math.random();
  p.style.position = "absolute";
  p.style.cursor = "move";
  p.ondblclick = change;
  playground.appendChild(p);

  dragger(p);
});
function dragger(element) {
  let pos = {};
  element.onmousedown = dragMouse;

  function dragMouse(e) {
    pos.x = e.clientX;
    pos.y = e.clientY;

    document.onmouseup = function () {
      document.onmouseup = null;
      document.onmousemove = null;
    };

    document.onmousemove = function (e) {
      pos.ux = pos.x - e.clientX;
      pos.uy = pos.y - e.clientY;
      pos.x = e.clientX;
      pos.y = e.clientY;
      console.log(pos.x, pos.y);
      element.style.left = element.offsetLeft - pos.ux + "px";
      element.style.top = element.offsetTop - pos.uy + "px";
    };
  }
}
function change(e) {
  textInput.value = e.target.textContent;
  selected.obj = e.target;
}
updateTextBtn.addEventListener("click", function () {
  selected.obj.textContent = textInput.value;
});

select.addEventListener("click", function () {
  if (selectOptionsContainer.style.display === "none")
    selectOptionsContainer.style.display = "block";
  else selectOptionsContainer.style.display = "none";
});
