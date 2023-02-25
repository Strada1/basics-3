import { ERRORS, OPERATORS } from "./namespaces.js";
import {
  checkOperator,
  firstNumber,
  secondNumber,
  equalButton,
  typeOfOperator,
  resultField,
} from "./calculatorActionFn.js";

function calculator() {
  if (firstNumber.value === "" || secondNumber.value === "") {
    resultField.textContent = ERRORS.EMPTY_FIELDS;
  } else if (
    typeOfOperator.value === OPERATORS.DIVISION &&
    secondNumber.value === "0"
  ) {
    resultField.textContent = ERRORS.DIVISION_BY_0;
  } else if (
    firstNumber.value.startsWith(".") ||
    secondNumber.value.startsWith(".")
  ) {
    resultField.textContent = ERRORS.STARTS_WITH_DOT;
  } else {
    checkOperator();
  }
  const lastResult = document.createElement("div");
  lastResult.className = "results-field";
  lastResult.textContent = resultField.textContent;
  document.body.appendChild(lastResult);
  let removeResults = () => lastResult.remove();

  lastResult.addEventListener("click", removeResults);
}

equalButton.addEventListener("click", calculator);
