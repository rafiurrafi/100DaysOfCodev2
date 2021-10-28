const addButton = document.querySelector(".action__add-btn");

const listContainer = document.querySelector("#booking");

addButton.addEventListener("click", (e) => {
  const list = document.createElement("div");
  list.className = "booking-list";
  list.innerHTML = `<input type="text" placeholder="Persepolis" />
    <input type="text" placeholder="543" />
    <input type="text" placeholder="Mark Haddon" />
    <input type="text" placeholder="N/A" />`;
  listContainer.append(list);
});
