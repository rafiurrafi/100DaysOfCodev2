const modal = document.querySelector(".section-modal");
const openModalBtn = document.querySelectorAll(".slider-btn");

for (let i = 0; i < openModalBtn.length; i++) {
  openModalBtn[i].addEventListener("click", () => {
    console.log("Open modal");
  });
}
console.log(openModalBtn);
