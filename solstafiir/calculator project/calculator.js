const ERRORS = {
  EMPTY_FIELDS: "Заполните поля!",
  DIVISION_BY_0: "Делить на 0 нельзя!",
  STARTS_WITH_DOT: "Введите корректное число!",
};
const OPERATORS = {
  PLUS: "plus",
  MINUS: "minus",
  MULTI: "multiply",
  DIVISION: "division",
};
const firstNumber = document.querySelector(".first-value");
const secondNumber = document.querySelector(".second-value");
const equalButton = document.querySelector(".equal-button");
const typeOfOperator = document.querySelector(".select-section");
const resultField = document.querySelector(".final-result");

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
    function checkOperator() {
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
