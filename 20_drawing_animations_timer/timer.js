class Timer {
  constructor(durationInput, startButton, pauseButton, callbacks) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;
    if (callbacks) {
      this.onStart = callbacks.onStart;
      this.onTick = callbacks.onTick;
      this.onComplete = callbacks.onComplete;
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
    this.interval = setInterval(this.tick, 50);
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
      if (this.onComplete) {
        this.onComplete();
      }
    } else {
      this.timeRemaining = this.timeRemaining - 0.05;
      if (this.onTick) {
        this.onTick();
      }
    }
  };

  get timeRemaining() {
    return parseFloat(this.durationInput.value);
  }

  set timeRemaining(time) {
    this.durationInput.value = time.toFixed(2);
  }
}
