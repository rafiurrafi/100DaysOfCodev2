// const canvas = document.querySelector("#canvas");
// const ctx = canvas.getContext("2d");
// const nameInput = document.querySelector("#nameInput");
// const downloadBtn = document.querySelector("#download-btn");

// const image = new Image();
// image.src = "1.jpg";
// image.onload = function () {
//   drawImage();
// };

// function drawImage() {
//   ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
//   ctx.font = "30px League Gothic";
//   ctx.fillStyle = "#b84f0e";
//   ctx.fillText(nameInput.value, 250, 180);
// }

// nameInput.addEventListener("input", () => {
//   drawImage();
// });
// downloadBtn.addEventListener("click", () => {
//   if (nameInput.value.length > 3) {
//     downloadBtn.href = canvas.toDataURL();
//     downloadBtn.download = "Certificate " + nameInput.value;
//   } else {
//     showToast();
//   }
// });
// function showToast() {
//   const toast = document.querySelector("#toast");
//   toast.classList.add("active");
//   setTimeout(() => {
//     toast.classList.remove("active");
//   }, 1000);
// }

const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
const nameInput = document.querySelector("#nameInput");

const image = new Image();
image.src = "1.jpg";
image.onload = function () {
  drawImage();
};
function drawImage() {
  ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
  ctx.font = "30px League Gothic";
  ctx.fillStyle = "#b84f0e";
  ctx.fillText(nameInput.value, 250, 180);
}

nameInput.addEventListener("input", () => {
  drawImage();
});
