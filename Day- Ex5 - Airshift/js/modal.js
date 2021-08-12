const modal = document.querySelector(".section-modal");
const openModalBtn = document.querySelectorAll(".slider-btn");
const modalCloseBtn = document.querySelector(".modal-content__close");

for (let i = 0; i < openModalBtn.length; i++) {
  openModalBtn[i].addEventListener("click", () => {
    modal.style.display = "block";
  });
}
modalCloseBtn.addEventListener("click", () => {
  modal.style.display = "none";
});
console.log(openModalBtn);
