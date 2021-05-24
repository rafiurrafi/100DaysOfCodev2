const search = document.querySelector(".search-box ");
const btn = document.querySelector(".search-box__icon ");
const input = document.querySelector(".search-box__input ");

btn.addEventListener("click", function () {
  search.classList.toggle("active");
  input.focus();
});
