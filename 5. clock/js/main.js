const clock = document.querySelector(".clock");
const selects = document.querySelectorAll("select");
const hourSelect = document.querySelector("#hour-select");
const minuteSelect = document.querySelector("#minute-select");
const amSelect = document.querySelector("#am-select");
const addBtn = document.querySelector("button");
let alarmTime,
  isAlarm = false;
const alarmTone = new Audio("./assets/alarm.mp3");
console.log(alarmTone);
setInterval(() => {
  let currentTime = new Date();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();

  const formatedTime = `${formatTime(hours)} : ${formatTime(
    minutes
  )} : ${formatTime(seconds)}`;
  const timeForAlarm = `${formatTime(hours)} : ${formatTime(minutes)}`;
  clock.textContent = formatedTime;
  if (alarmTime === timeForAlarm) isAlarm = true;
  if (isAlarm) {
    alarmTone.play();
    alarmTone.loop = true;
  } else {
    alarmTone.pause();
  }
}, 1000);
function formatTime(time) {
  return `${time.toString().padStart(2, 0)}`;
}
function setAlarm() {
  let selectetHour = hourSelect.value;
  const selectetMinute = minuteSelect.value;
  const selectetMeridian = amSelect.value;
  if (selectetMeridian === "PM") selectetHour = +selectetHour + 12;
  alarmTime = `${selectetHour} : ${selectetMinute}`;
}
function stopAlarm() {
  isAlarm = false;
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
    this.textContent = "Reset";
    setAlarm();
  } else if (this.textContent === "Reset") {
    stopAlarm();
  }
});
