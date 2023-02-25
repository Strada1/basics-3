import { OPERATORS } from "./namespaces.js";

export const firstNumber = document.querySelector(".first-value");
export const secondNumber = document.querySelector(".second-value");
export const equalButton = document.querySelector(".equal-button");
export const typeOfOperator = document.querySelector(".select-section");
export const resultField = document.querySelector(".final-result");

export function checkOperator() {
  switch (typeOfOperator.value) {
    case OPERATORS.PLUS:
      resultField.textContent = parseFloat(
        (+firstNumber.value + +secondNumber.value).toFixed(5)
      );
      break;
    case OPERATORS.MINUS:
      resultField.textContent = parseFloat(
        (firstNumber.value - secondNumber.value).toFixed(5)
      );
      break;
    case OPERATORS.MULTI:
      resultField.textContent = parseFloat(
        firstNumber.value * secondNumber.value
      ).toFixed(5);
      break;
    case OPERATORS.DIVISION:
      resultField.textContent = parseFloat(
        (firstNumber.value / secondNumber.value).toFixed(5)
      );
      break;
  }
}
