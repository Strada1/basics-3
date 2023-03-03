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
  result.textContent = resultValue;
}

operator.addEventListener("click", operatorClick);
window.addEventListener("click", removeActive);
equals.addEventListener("click", calculate);

const timer = document.querySelector(".timer");
const button = document.querySelector(".button");

function buttonChange() {
  if (button.textContent === "START") {
    showTime();
    button.textContent = "PAUSE";
  } else {
    button.textContent = "START";
  }
}

function showTime() {
  time += 1;
  timer.textContent = time;
  setTimeout(showTime, 1000);
}

button.addEventListener("click", buttonChange);
