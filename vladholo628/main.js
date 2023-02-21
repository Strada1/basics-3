const counterScreen = document.querySelector(".counter__screen");
const counterBtn = document.querySelector(".counter__button");

let timerIsRunning = false;
let intervalId;

const startTimer = () => {
  let timerStart = 0;
  let delay = 1000;
  intervalId = setInterval(() => {
    counterScreen.innerHTML = timerStart;
    timerStart++;
  }, delay);

  timerIsRunning = true;
};

counterBtn.addEventListener("click", (e) => {
  if (timerIsRunning) {
    clearInterval(intervalId);
    timerIsRunning = false;
    counterScreen.innerHTML = "0";
  } else {
    startTimer();
  }
});
