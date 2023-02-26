import { addResultToHistory } from "./history-results.js";
import { formatFloat } from "./number-formatting.js";
import { OPERATIONS } from "./operations.js";

const btnCalculate = document.getElementById("calculate");
const resultOutput = document.getElementById("result");
const leftOperand = document.getElementById("left-operand");
const rightOperand = document.getElementById("right-operand");
const operation = document.getElementById("operation");

btnCalculate.addEventListener("click", btnCalculateClickHandler);

function btnCalculateClickHandler() {
  const leftOperandValue = getValue(leftOperand);
  const rightOperandValue = getValue(rightOperand);
  const operationValue = operation.value;
  const countDecimalsNum = 2;

  if (!checkOperands(leftOperandValue, leftOperandValue, operationValue)) return;

  const expressionResult = getResult(leftOperandValue, rightOperandValue, operationValue);
  
  resultOutput.textContent = Number.isInteger(expressionResult)
    ? expressionResult
    : formatFloat(expressionResult, countDecimalsNum);
    
  addResultToHistory(resultOutput.textContent);
}

function getResult(leftValue, rightValue, operation) {
  switch (operation) {
    case OPERATIONS.ADD:
      return leftValue + rightValue;
    case OPERATIONS.SUBTRACT:
      return leftValue - rightValue;
    case OPERATIONS.MULTIPLY:
      return leftValue * rightValue;
    case OPERATIONS.DIVIDE:
      return leftValue / rightValue;
  }
}

function checkOperands(left, right, operation) {
  let isValidOperands = true;

  if (Number.isNaN(left) || Number.isNaN(right)) {
    alert("Введены неправильные данные (нужно ввести числа!)");
    isValidOperands = false;
  }

  if (right === 0 && operation === "/") {
    alert("На ноль делить нельзя ты что!");
    isValidOperands = false;
  }

  return isValidOperands;
}

function getValue(operand) {
  const value = operand.value.trim();
  return value === "" ? NaN : Number(value);
}
