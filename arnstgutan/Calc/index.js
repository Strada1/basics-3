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

equals.addEventListener("click", calculate);

/* TIMER */
import * as timer from "./timer.js";
timer.start.addEventListener("click", timer.buttonChange);
timer.reset.addEventListener("click", timer.resetTimer);

/* COLORS */
/* const colorChangeBtn = document.querySelector("#change-bg");
export const body = document.querySelector(".body_container");
const colorCodes = document.querySelectorAll(".color-code");
const saveColorBtn = document.querySelector("#save-bg");
const colorsContainer = document.querySelector(".colors-container");
const example = document.querySelectorAll(".example");

export function getRandomColor() {
  const randomColor = Math.floor(Math.random() * 256);
  console.log(randomColor);
  return randomColor;
}

export function changeColor() {
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
  let bodyStyle = getComputedStyle(body);
  let bodyColorOnSave = bodyStyle.backgroundColor;
  console.log(bodyColorOnSave);

  const newColorEx = document.createElement("div");
  colorsContainer.appendChild(newColorEx);
  newColorEx.classList.add("color-example");

  const newExample = document.createElement("div");
  newColorEx.appendChild(newExample);
  newExample.classList.add("example");
  newExample.style.backgroundColor = bodyColorOnSave;

  const newCode = document.createElement("div");
  newColorEx.appendChild(newCode);
  newCode.classList.add("color-code");
  newCode.textContent = bodyStyle.backgroundColor;

  const newDelete = document.createElement("div");
  newColorEx.appendChild(newDelete);
  newDelete.classList.add("delete-example");
}

function setBGfromColorList(exp) {
  let exampleBGColor = getComputedStyle(exp).backgroundColor;
  body.style.backgroundColor = exampleBGColor;
}

function deleteColorFromList(exp) {
  let colorExampleToDelete = exp.parentElement;
  console.log(colorExampleToDelete);
  colorExampleToDelete.remove();
} */

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
