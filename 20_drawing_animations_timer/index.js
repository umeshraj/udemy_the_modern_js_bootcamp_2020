class Timer {
  constructor(durationInput, startButton, pauseButton, callbacks) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;
    if (callbacks) {
      this.onStart = callbacks.onStart;
    }

    // option a
    this.startButton.addEventListener("click", this.start);
    // option b
    // this.startButton.addEventListener("click", this.start.bind(this));
    this.pauseButton.addEventListener("click", this.pause);
  }

  //   option A
  start = () => {
    if (this.onStart) {
      this.onStart();
    }
    this.tick(); // to start immediately when start is pressed
    this.interval = setInterval(this.tick, 1000);
  };

  //   //   option B
  //   start() {
  //     console.log(this);
  //   }

  pause = () => {
    clearInterval(this.interval);
  };

  tick = () => {
    if (this.timeRemaining <= 0) {
      this.pause();
    } else {
      this.timeRemaining = this.timeRemaining - 1;
    }
  };

  get timeRemaining() {
    return parseFloat(this.durationInput.value);
  }

  set timeRemaining(time) {
    this.durationInput.value = time;
  }
}

// Select DOM elements
const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");

const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart() {
    console.log("Timer started");
  },
  onTick() {},
  onComplete() {},
});
// timer.start();
