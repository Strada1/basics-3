import { /*  body, getRandomColor, */ changeColor } from "./index.js";

export const timerValue = document.querySelector(".timer");
export const start = document.querySelector("#strt");
export const reset = document.querySelector("#rst");
export let sec = 0;
export let min = 0;
export let hrs = 0;
export let t;

export function buttonChange() {
  if (start.textContent === "start") {
    timer();
    start.textContent = "pause";
  } else {
    clearTimeout(t);
    start.textContent = "start";
  }
}

export function tick() {
  sec++;
  if (sec >= 60) {
    sec = 0;
    min++;
    if (min >= 60) {
      min = 0;
      hrs++;
    }
  }
}

export function add() {
  tick();
  if (sec % 2 === 0) {
    changeColor();
  }
  timerValue.textContent =
    (hrs > 9 ? hrs : "0" + hrs) +
    ":" +
    (min > 9 ? min : "0" + min) +
    ":" +
    (sec > 9 ? sec : "0" + sec);
  timer();
}

export function timer() {
  t = setTimeout(add, 1000);
}

export function resetTimer() {
  timerValue.textContent = "00:00:00";
  sec = 0;
  min = 0;
  hrs = 0;
  start.textContent = "start";
  clearTimeout(t);
}

/* start.addEventListener("click", buttonChange);
reset.addEventListener("click", resetTimer);
 */
