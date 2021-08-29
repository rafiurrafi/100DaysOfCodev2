const mainNumber = document.querySelector(".slider__number-main");
const sliderNumbers = document.querySelector(".slider__numbers");
let count = 0;
function clone() {
  const cloneNumber = mainNumber.cloneNode(true);
  cloneNumber.classList.add("slider__number-clone");
  if (!(count % 2)) cloneNumber.classList.add("move-to-right-bottom");
  else cloneNumber.classList.add("move-to-bottom");
  sliderNumbers.appendChild(cloneNumber);
  setTimeout(() => {
    // sliderNumbers.removeChild(cloneNumber);
    cloneNumber.remove();
    console.log(cloneNumber);
  }, 600);
  console.log(sliderNumbers);
  count++;
}
