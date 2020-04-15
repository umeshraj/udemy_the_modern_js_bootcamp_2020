class Timer {
  constructor(durationInput, startButton, pauseButton) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;

    // option a
    this.startButton.addEventListener("click", this.start);
    // option b
    // this.startButton.addEventListener("click", this.start.bind(this));
    this.pauseButton.addEventListener("click", this.pause);
  }

  //   option A
  start = () => {
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
    console.log("tick");
  };
}

// Select DOM elements
const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");

const timer = new Timer(durationInput, startButton, pauseButton);
timer.start();
