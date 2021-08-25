const rep = document.querySelectorAll(".copyMe");

rep.forEach((element, index) => {
  element.addEventListener("click", function () {
    console.log(this);
  });
});
