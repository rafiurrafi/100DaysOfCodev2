const clock = document.querySelector(".clock");
const selects = document.querySelectorAll("select");
const hourSelect = document.querySelector("#hour-select");
const minuteSelect = document.querySelector("#minute-select");
const amSelect = document.querySelector("#am-select");
const addBtn = document.querySelector("button");
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
function setAlarm() {
  let selectetHour = hourSelect.value;
  const selectetMinute = minuteSelect.value;
  const selectetMeridian = amSelect.value;
  if (selectetMeridian === "PM") selectetHour = +selectetHour + 12;
  const createTime = `${selectetHour} : ${selectetMinute}`;
  const runningTimes = clock.textContent.split(":");
  const time = `${runningTimes[0]} : ${runningTimes[1]}`;
  console.log(createTime, time);
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
addBtn.addEventListener("click", function () {
  if (this.textContent == "Add alarm") {
    // this.textContent = "Reset";
    setAlarm();
  }
});
