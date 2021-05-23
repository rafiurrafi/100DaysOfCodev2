const nextButton = document.querySelector(".btn-next");
const prevButton = document.querySelector(".btn-prev");
const progressMilestons = document.querySelectorAll(".progress-milestone div");
const progressBar = document.querySelector(".progress-bar div");

let count = 0;
prevButton.addEventListener("click", function () {
  if (count < 0) return;
  count--;
  removeActiveClass();
  addActiveClass();
  progressBar.style.width = count * 33.3 + "%";
});
nextButton.addEventListener("click", function () {
  if (count >= 4) nextButton.setAttribute("disabled", true);
  count++;
  removeActiveClass();
  addActiveClass();
  progressBar.style.width = count * 33.3 + "%";
});

function removeActiveClass() {
  for (let i = 0; i < progressMilestons.length; i++) {
    progressMilestons[i].classList.remove("active");
  }
}
function addActiveClass() {
  for (let i = 0; i <= count; i++) {
    progressMilestons[i].classList.add("active");
  }
}
