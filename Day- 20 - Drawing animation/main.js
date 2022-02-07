class Timer {
  constructor(durationInput, startButton, pauseButton, callbacks) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;

    if (callbacks) {
      this.onStart = callbacks.onStart;
    }

    this.startButton.addEventListener("click", this.start);
    this.pauseButton.addEventListener("click", this.pause);
  }
  start = () => {
    if (this.onStart) this.onStart();
    this.tick();
    this.interval = setInterval(this.tick, 1000);
  };
  pause = () => {
    clearInterval(this.interval);
  };
  tick() {
    let timeRemaining = this.durationInput.value - 1;
    this.durationInput.value = timeRemaining;
    console.log(timeRemaining);
    if (this.durationInput.value <= 0) clearInterval(this.interval);
  }
}

const durationInput = document.querySelector("#durationInput");
const startButton = document.querySelector("#startButton");
const pauseButton = document.querySelector("#pauseButton");

const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart() {
    console.log("Timer started");
  },
  onTick() {},
  onComplete() {},
});
