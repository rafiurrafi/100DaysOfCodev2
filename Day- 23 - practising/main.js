const slider = document.querySelector(".slider-container");
const sliders = Array.from(document.querySelectorAll(".slide"));

let isDragging = false;
let startPos = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let animationId = 0;
let currentIndex = 0;

sliders.forEach((slide, index) => {
  const slideImg = slide.querySelector("img");
  slideImg.addEventListener("dragstart", (e) => e.preventDefault());

  // touch event
  document.addEventListener("touchstart", touchStart(index));
  document.addEventListener("touchend", touchEnd);
  document.addEventListener("touchmove", touchMove);
  // mouse event
  document.addEventListener("mousedown", touchStart(index));
  document.addEventListener("mouseup", touchEnd);
  document.addEventListener("mouseleave", touchEnd);
  document.addEventListener("mousemove", touchMove);
});
window.oncontextmenu = function (e) {
  e.preventDefault();
  e.stopPropagation();
  return false;
};
function touchStart(index) {
  return function (e) {
    isDragging = true;
    currentIndex = index;
    startPos = getPosition(e);
    animationId = requestAnimationFrame(animation);
  };
}
function touchEnd() {
  isDragging = false;
  cancelAnimationFrame(animationId);
  const movedBy = currentTranslate - prevTranslate;
  if (movedBy < -100 && currentIndex < sliders.length - 1) currentIndex += 1;
  if (movedBy > 100 && currentIndex >= 0) currentIndex -= 1;
  setPositionByIndex();
}
function touchMove(e) {
  if (isDragging) {
    const currentPosition = getPosition(e);
    currentTranslate = prevTranslate + currentPosition - startPos;
  }
}
function getPosition(e) {
  return e.type.includes("mouse") ? e.pageX : e.touches[0].clientX;
}
function animation() {
  setSliderPosition();
  if (isDragging) requestAnimationFrame(animation);
}
function setSliderPosition() {
  slider.style.transform = `translateX(${currentTranslate}px)`;
}
function setPositionByIndex() {
  currentTranslate = currentIndex * -window.innerWidth;
  prevTranslate = currentTranslate;
  setSliderPosition();
  console.log(currentTranslate);
}
