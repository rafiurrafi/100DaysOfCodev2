const selectMovie = document.querySelector("#movie");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const container = document.querySelector(".container");
const seatCount = document.querySelector("#count");
const totalPrice = document.querySelector("#price");
let ticketPrice = +selectMovie.value;

seats.forEach((seat) => {
  seat.addEventListener("click", () => {
    seat.classList.toggle("selected");

    updateTicketPrice();
  });
});
selectMovie.addEventListener("change", (e) => {
  ticketPrice = e.target.value;
  setMovieData(e.target.index, e.target.value);
  updateTicketPrice();
});

function updateTicketPrice() {
  const selectedSeat = container.querySelectorAll(".seat.selected");
  seatCount.innerHTML = selectedSeat.length;
  totalPrice.textContent = selectedSeat.length * ticketPrice;

  const seatIndex = [...selectedSeat].map((seat) => {
    return [...seats].indexOf(seat);
  });
  localStorage.setItem("selectedSeats", JSON.stringify(seatIndex));
}

//save selected movie index and price
function setMovieData(movieIndex, moviePrice) {
  localStorage.setItem("movieIndex", movieIndex);
  localStorage.setItem("moviePrice", moviePrice);
}
