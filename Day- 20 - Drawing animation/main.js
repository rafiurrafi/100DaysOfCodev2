const durationInput = document.querySelector("#durationInput");
const startButton = document.querySelector("#startButton");
const pauseButton = document.querySelector("#pauseButton");
const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart() {
    console.log("Timer started");
  },
  onTick() {
    console.log("Timer ticking...");
  },
  onComplete() {
    console.log("Timer completed");
  },
});
