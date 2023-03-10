/* CALC */
const operator = document.querySelector(".operator");
const operandLeft = document.querySelector("#left");
const operandright = document.querySelector("#right");
const equals = document.querySelector(".equals");
const result = document.querySelector(".result");
let operand1, operand2, operatorValue, resultValue;

function checkValue() {
  if (isFinite(operand1) && isFinite(operand2)) {
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
        resultValue = +operand1 + +operand2;
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

equals.addEventListener("click", calculate);

/* TIMER */
import * as timer from "./timer.js";
timer.start.addEventListener("click", timer.buttonChange);
timer.reset.addEventListener("click", timer.resetTimer);

/* COLORS */
import * as colors from "./colors.js";

colors.colorChangeBtn.addEventListener("click", colors.changeColor);
colors.saveColorBtn.addEventListener("click", colors.saveColorFunction);
colors.colorsContainer.addEventListener("click", function (event) {
  let target = event.target;
  if (!target.classList.contains("example")) return;
  colors.setBGfromColorList(target);
});

colors.colorsContainer.addEventListener("click", function (event) {
  let target = event.target;
  if (!target.classList.contains("delete-example")) return;
  colors.deleteColorFromList(target);
});

document.addEventListener("DOMContentLoaded", colors.getListColorsValues);
