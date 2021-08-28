const mainNumber = document.querySelector(".slider__number-main");
const sliderNumbers = document.querySelector(".slider__numbers");
console.log(sliderNumbers);
console.log(mainNumber);
function clone() {
  const cloneNumber = mainNumber.cloneNode(true);
  cloneNumber.classList.add("slider__number-clone");
  cloneNumber.classList.add("move-to-right-bottom");
  sliderNumbers.appendChild(cloneNumber);
  setTimeout(() => {
    // sliderNumbers.removeChild(cloneNumber);
    cloneNumber.remove();
    console.log(cloneNumber);
  }, 600);
  console.log(sliderNumbers);
}
