const cards = document.querySelectorAll(".card");

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", function (e) {
    removeClass();
    this.classList.add("active");
  });
}
function removeClass() {
  for (let i = 0; i < cards.length; i++) {
    cards[i].classList.remove("active");
  }
}
