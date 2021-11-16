const modalBtn = document.querySelector("#modal");
const menuBtn = document.querySelector("#menu");
const sidebar = document.querySelector(".sidebar");
const container = document.querySelector(".container");

function showSidebar() {
  sidebar.classList.toggle("show");
  container.classList.toggle("split");
}

//event handler
menuBtn.addEventListener("click", showSidebar);
