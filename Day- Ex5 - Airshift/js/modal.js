const modal = document.querySelector(".section-modal");
const openModalBtn = document.querySelectorAll(".slider-btn");
// const modalCloseBtn

for (let i = 0; i < openModalBtn.length; i++) {
  openModalBtn[i].addEventListener("click", () => {
    modal.style.display = "block";
  });
}
console.log(openModalBtn);
