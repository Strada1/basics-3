/* CALC */
const operator = document.querySelector(".operator");
const operandLeft = document.querySelector("#left");
const operandright = document.querySelector("#right");
const equals = document.querySelector(".equals");
const result = document.querySelector(".result");
let operand1, operand2, resultValue;
let time = 0;

function operatorClick() {
  if (operator.classList.contains("active")) {
    operator.classList.remove("active");
  } else {
    operator.classList.add("active");
  }
}

function removeActive(e) {
  if (e.target !== operator) {
    operator.classList.remove("active");
  }
}

function checkValue() {
  if (isFinite(operand1) && isFinite(operand2)) {
    console.log(true);
    return true;
  } else {
    alert("Введите числа");
    return false;
  }
}

function calculate() {
  operand1 = operandLeft.value;
  operand2 = operandright.value;
  operatorValue = operator.value;
  if (checkValue()) {
    switch (operatorValue) {
      case "plus":
        resultValue = operand1 + operand2;
        break;
      case "minus":
        resultValue = operand1 - operand2;
        break;
      case "multiply":
        resultValue = operand1 * operand2;
        break;
      case "division":
        resultValue = operand1 / operand2;
        break;
      default:
        alert("Что за чертовщина!");
    }
  }
  result.value = resultValue;
}

operator.addEventListener("click", operatorClick);
window.addEventListener("click", removeActive);
equals.addEventListener("click", calculate);

/* TIMER */
const timerValue = document.querySelector(".timer");
const start = document.querySelector("#strt");
const reset = document.querySelector("#rst");
let sec = 0;
let min = 0;
let hrs = 0;
let t;

function buttonChange() {
  if (start.textContent === "start") {
    timer();
    start.textContent = "pause";
  } else {
    clearTimeout(t);
    start.textContent = "start";
  }
}

function tick() {
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

function add() {
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

function timer() {
  t = setTimeout(add, 1000);
}

function resetTimer() {
  timerValue.textContent = "00:00:00";
  sec = 0;
  min = 0;
  hrs = 0;
  start.textContent = "start";
  clearTimeout(t);
}

start.addEventListener("click", buttonChange);
reset.addEventListener("click", resetTimer);

/* COLORS */
const colorChangeBtn = document.querySelector("#change-bg");
const body = document.querySelector(".body_container");
const colorCodes = document.querySelectorAll(".color-code");
const saveColorBtn = document.querySelector("#save-bg");

function getRandomColor() {
  const randomColor = Math.floor(Math.random() * 256);
  console.log(randomColor);
  return randomColor;
}

function changeColor() {
  body.style.backgroundColor =
    "rgb(" +
    getRandomColor() +
    "," +
    getRandomColor() +
    "," +
    getRandomColor() +
    ")";
}

function getListColorsValues() {
  colorCodes.forEach((colorCode) => {
    let code = colorCode.previousElementSibling;
    let styles = getComputedStyle(code);
    console.log(styles.backgroundColor);
    colorCode.textContent = styles.backgroundColor;
  });
}

function saveColorFunction() {
  let bodyColorOnSave = getComputedStyle(body);
  console.log(bodyColorOnSave.backgroundColor);
  const newDiv = document.createElement("div");
}

colorChangeBtn.addEventListener("click", changeColor);
saveColorBtn.addEventListener("click", saveColorFunction);
document.addEventListener("DOMContentLoaded", getListColorsValues);
