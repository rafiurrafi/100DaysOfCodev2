const clock = document.querySelector(".clock");
const selects = document.querySelectorAll("select");
const hourSelect = document.querySelector("#hour-select");
const minuteSelect = document.querySelector("#minute-select");
const amSelect = document.querySelector("#am-select");
setInterval(() => {
  let currentTime = new Date();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();

  const formatedTime = `${formatTime(hours)} : ${formatTime(
    minutes
  )} : ${formatTime(seconds)}`;
  clock.textContent = formatedTime;
}, 1000);

function formatTime(time) {
  return `${time.toString().padStart(2, 0)}`;
}
document.addEventListener("DOMContentLoaded", () => {
  for (let i = 1; i <= 12; i++) {
    const value = i.toString().padStart(2, "0");
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    hourSelect.appendChild(option);
  }
  for (let i = 0; i < 60; i++) {
    const value = i.toString().padStart(2, "0");
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    minuteSelect.appendChild(option);
  }
  for (let i = 1; i <= 2; i++) {
    const value = i === 1 ? "AM" : "PM";
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    amSelect.appendChild(option);
  }
});
