const searchButton = document.querySelector(".search-box__icon");
const searchInput = document.querySelector(".search-box__input");
searchButton.addEventListener("click", function () {
  searchInput.classList.toggle("active");
});
