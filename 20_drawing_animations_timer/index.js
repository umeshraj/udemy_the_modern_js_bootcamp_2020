btnStart = document.querySelector("#btn-start");
btnStop = document.querySelector("#btn-stop");
timerTxt = document.querySelector("#timer");
let interval;

btnStart.addEventListener("click", () => {
  interval = setInterval(() => {
    // timerVal = parseInt(timerTxt.innerText);
    timerVal = parseInt(timerTxt.value);

    if (timerVal > 0) {
      //   timerTxt.innerText = timerVal - 1;
      timerTxt.value = timerVal - 1;
    }
  }, 1000);
});

btnStop.addEventListener("click", () => {
  clearInterval(interval);
});
