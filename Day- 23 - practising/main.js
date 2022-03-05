const accordionBtn = document.querySelectorAll(".accordion button");
const panels = document.querySelectorAll(".panel");

accordionBtn.forEach((btn) => {
  btn.addEventListener("click", function () {
    const panel = this.nextElementSibling;
    if (panel.style.maxHeight) panel.style.maxHeight = null;
    else panel.style.maxHeight = panel.scrollHeight + "px";
  });
});
