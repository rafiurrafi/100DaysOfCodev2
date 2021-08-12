const modal = document.querySelector(".section-modal");
const openModalBtn = document.querySelectorAll(".slider-btn");
const modalCloseBtn = document.querySelector(".modal-content__close");

for (let i = 0; i < openModalBtn.length; i++) {
  openModalBtn[i].addEventListener("click", () => {
    openModal();
  });
}
modalCloseBtn.addEventListener("click", () => {
  closeModal();
});
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

function openModal() {
  modal.style.display = "block";
  modal.style.animationName = "openModalAnim";
  modal.style.animationDuration = "1s";
}
function closeModal() {
  modal.style.display = "none";
}
