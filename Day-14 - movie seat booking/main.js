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
  updateTicketPrice();
});

function updateTicketPrice() {
  const selectedSeat = container.querySelectorAll(".seat.selected");
  seatCount.innerHTML = selectedSeat.length;
  totalPrice.textContent = selectedSeat.length * ticketPrice;
}
