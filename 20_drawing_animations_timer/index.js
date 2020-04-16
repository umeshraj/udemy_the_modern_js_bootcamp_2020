// Select DOM elements
const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");
const circle = document.querySelector("circle");
const tickDuration = 50;

const perimeter = parseFloat(circle.getAttribute("r")) * 2 * Math.PI;
circle.setAttribute("stroke-dasharray", perimeter);

let currentOffset = 0;

const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart() {
    // circle.setAttribute('stroke-dashoffset')
    console.log("Timer started");
  },
  onTick() {
    circle.setAttribute("stroke-dashoffset", currentOffset);
    currentOffset -= 1;
  },
  onComplete() {
    console.log("Timer is done");
  },
});
// timer.start();
