class Timer {
  constructor(durationInput, startButton, pauseButton) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;

    // option a
    this.startButton.addEventListener("click", this.start);
    // option b
    // this.startButton.addEventListener("click", this.start.bind(this));
  }

  //   option A
  start = () => {
    console.log(this);
  };

  //   //   option B
  //   start() {
  //     console.log(this);
  //   }
}

// Select DOM elements
const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");

const timer = new Timer(durationInput, startButton, pauseButton);
timer.start();
