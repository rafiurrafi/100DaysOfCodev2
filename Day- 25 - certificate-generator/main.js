const playground = document.querySelector(".playground");
const addTextBtn = document.querySelector("#add-text");
const textInput = document.querySelector("#input-text");
const updateTextBtn = document.querySelector("#update-text-btn");
const textColor = document.querySelector("#text-color");

const select = document.querySelector(".select");
const selectOptionsContainer = select.querySelector(".select__options");
const selectOptions = document.querySelectorAll(".select__options li");
const selectText = document.querySelector(".select > p");

let holder = {};
let selected = {};
addTextBtn.addEventListener("click", () => {
  const p = document.createElement("p");
  p.textContent = "Hello" + Math.random();
  p.style.position = "absolute";
  p.style.zIndex = 1;
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
  selected.obj.style.fontFamily = selected.obj.fontFamily;
  selected.obj.style.color = `${textColor.value}`;
});

select.addEventListener("click", function () {
  selectOptionsContainer.classList.toggle("d-none");
});
selectOptions.forEach((option) => {
  option.addEventListener("click", function () {
    selected.obj.fontFamily = option.querySelector("span").textContent;
  });
});

//add background image
const bgImg = document.querySelector("#bg-img");
let uploadedImg = "";
bgImg.addEventListener("change", function () {
  const reader = new FileReader();
  reader.addEventListener("load", function () {
    uploadedImg = reader.result;
    playground.style.backgroundImage = `url(${uploadedImg})`;
  });
  reader.readAsDataURL(this.files[0]);
});
