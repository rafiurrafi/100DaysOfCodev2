let startTime;
let pausedTime = 0;
let intervalId;
let isRunning = false;

function updateStopwatch() {
  const currentTime = Date.now() - pausedTime;
  const elapsedMilliseconds = currentTime - startTime;
}
startButton.addEventListener("click", function () {
  if (!isRunning) {
    startTime = Date.now() - pausedTime;
    intervalId = setInterval(updateStopwatch, 10);
    isRunning = true;
  }
});
stopButton.addEventListener("click", function () {
  clearInterval(intervalId);
  isRunning = false;
});
pauseButton.addEventListener("click", function () {
  if (isRunning) {
    clearInterval(intervalId);
    pausedTime += Date.now() - startTime;
    isRunning = false;
  }
});
resetButton.addEventListener("click", function () {
  clearInterval(intervalId);
  pausedTime = 0;
  isRunning = false;
});
