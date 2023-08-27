const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const container = document.querySelector(".container");
const movieSelect = document.querySelector("#movie");
const totalEl = document.querySelector("#total");
const countEl = document.querySelector("#count");
let ticketPrice = +movieSelect.value;
populatedUI();
function populatedUI() {}
function setMovieData(movie, price) {
  localStorage.setItem("movieIndex", movie);
  localStorage.setItem("moviePrice", price);
}

function updatedSelectedCount() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");
  const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));
  localStorage.setItem("selectedSeatsIndex", seatsIndex);
  const selectedSeatsCount = selectedSeats.length;
  const totalPrice = ticketPrice * selectedSeatsCount;
  totalEl.textContent = totalPrice;
  countEl.textContent = selectedSeatsCount;
}

movieSelect.addEventListener("change", (e) => {
  ticketPrice = +e.target.value;
  setMovieData(e.target.selectedIndex, e.target.value);
  updatedSelectedCount();
});

container.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");
    updatedSelectedCount();
  }
});
