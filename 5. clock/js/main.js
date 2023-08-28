const clock = document.querySelector(".clock");

setInterval(() => {
  let currentTime = new Date();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();
  console.log(hours);
  const formatedTime = formatTime(hours, minutes, seconds);
  clock.textContent = formatedTime;
}, 1000);

function formatTime(hours, minutes, seconds) {
  return `${hours.toString().padStart(2, 0)} : ${minutes
    .toString()
    .padStart(2, 0)} : ${seconds.toString().padStart(2, 0)}`;
}
