const playground = document.querySelector(".playground");
const addTextBtn = document.querySelector("#add-text");
const textInput = document.querySelector("#input-text");
const fontSizeInput = document.querySelector("#font-size-input");
const updateTextBtn = document.querySelector("#update-text-btn");
const textColor = document.querySelector("#text-color");

const select = document.querySelector(".select");
const selectOptionsContainer = select.querySelector(".select__options");
const selectOptions = document.querySelectorAll(".select__options li");
const selectText = document.querySelector(".select > p");

let holder = {};
let selected = {};
addTextBtn.addEventListener("click", () => {
  holder.obj = document.createElement("div");
  holder.obj.textContent = "<FULLNAME>";
  holder.obj.style.position = "absolute";
  holder.obj.style.fontSize = "30px";
  holder.obj.style.zIndex = 1;
  holder.obj.style.cursor = "move";
  holder.obj.ondblclick = change;

  dragger(holder.obj);
  playground.appendChild(holder.obj);
});
// under observation
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

      element.style.left = element.offsetLeft - pos.ux + "px";
      element.style.top = element.offsetTop - pos.uy + "px";
    };
  }
}

//observation till this point
function change(e) {
  textInput.value = e.target.textContent;
  fontSizeInput.value = e.target.style.fontSize.slice(0, -2);
  selected.obj = e.target;
}
updateTextBtn.addEventListener("click", function () {
  selected.obj.textContent = textInput.value;
  selected.obj.style.fontFamily = selected.obj.fontFamily;
  selected.obj.style.fontSize = fontSizeInput.value + "px";
  selected.obj.style.color = `${textColor.value}`;
});

select.addEventListener("click", function () {
  selectOptionsContainer.classList.toggle("d-none");
});
selectOptions.forEach((option) => {
  option.addEventListener("click", function () {
    selected.obj.fontFamily = option.querySelector("span").textContent;

    document.querySelector(".select-menu").textContent =
      option.querySelector("span").textContent;
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
    // style the playground
    playground.style.height = "500px";
    playground.style.width = "700px";
    playground.style.backgroundSize = "cover";
    playground.style.backgroundPosition = "center";
  });
  reader.readAsDataURL(this.files[0]);
});

//working with image
const image = document.querySelector("#img");
const heightImg = document.querySelector("#height");
const widthImg = document.querySelector("#width");
const updateImageBtn = document.querySelector("#update-img");

let updatedImage = "";
const selectedImg = {};
image.addEventListener("change", function () {
  const imageReader = new FileReader();
  imageReader.addEventListener("load", function () {
    updatedImage = imageReader.result;
    const img = document.createElement("div");
    img.style.backgroundImage = `url(${updatedImage})`;

    // style
    img.style.height = "100px";
    img.style.width = "100px";
    img.style.backgroundSize = "cover";
    img.style.backgroundPosition = "top";
    img.style.position = "absolute";
    img.ondblclick = changeImage;
    dragger(img);
    playground.appendChild(img);
  });
  imageReader.readAsDataURL(this.files[0]);
});
function changeImage(e) {
  selectedImg.obj = e.target;
  heightImg.value = selectedImg.obj.style.height.slice(0, -2);
  widthImg.value = selectedImg.obj.style.width.slice(0, -2);
}
updateImageBtn.addEventListener("click", (e) => {
  selectedImg.obj.style.height = heightImg.value + "px";
  selectedImg.obj.style.width = widthImg.value + "px";
});

// Download btn functionalities
const a = document.querySelector("#download-btn");

a.addEventListener("click", () => {
  a.download = "certificate.html";
  a.href =
    "data:text/html," +
    document.getElementById("playground-container").innerHTML;
});
