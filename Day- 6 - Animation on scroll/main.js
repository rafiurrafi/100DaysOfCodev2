const boxs = document.querySelectorAll(".box");

window.addEventListener("scroll", function () {
  const triggerPoint = (window.innerHeight / 5) * 4;

  boxs.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < triggerPoint) box.classList.add("active");
    else box.classList.remove("active");
  });
});
