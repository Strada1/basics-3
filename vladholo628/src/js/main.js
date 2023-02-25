import { calc } from "./calc";

const firstNumberInput = document.getElementById("firstNumberInput");
const secondNumberInput = document.getElementById("secondNumberInput");
const resultScreen = document.querySelector(".calculator__result");
const submitButton = document.querySelector(".calculator__form-button");
const operationSelect = document.querySelector(".calculator__form-select");
const hitoryScreen = document.querySelector(".history");

const OPERATIONS = {
  "+": "sum",
  "-": "sub",
  "*": "multi",
  "/": "divide",
};



const addToHistory = (resultValue) => {
  const newHistoryItem = document.createElement("span");
  newHistoryItem.classList.add("history__item");
  newHistoryItem.textContent = resultValue;

  newHistoryItem.addEventListener("click", (e) => {
    hitoryScreen.removeChild(e.target);
  });

  hitoryScreen.appendChild(newHistoryItem);
};

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  const firstNumber = Number(firstNumberInput.value);
  const secondNumber = Number(secondNumberInput.value);
  const selectedOperation = OPERATIONS[operationSelect.value];
  const result = calc(firstNumber, secondNumber, selectedOperation);

  addToHistory(result);

  resultScreen.textContent = result;
});
