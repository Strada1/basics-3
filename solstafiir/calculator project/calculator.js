const ERRORS = {
  EMPTY_FIELDS: "Заполните поля!",
  DIVISION_BY_0: "Делить на 0 нельзя!",
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

function calculate() {
  if (firstNumber.value === "" || secondNumber.value === "") {
    resultField.textContent = ERRORS.EMPTY_FIELDS;
  } else if (
    typeOfOperator.value === OPERATORS.DIVISION &&
    secondNumber.value === "0"
  ) {
    resultField.textContent = ERRORS.DIVISION_BY_0;
  } else {
    switch (typeOfOperator.value) {
      case OPERATORS.PLUS:
        resultField.textContent = (
          +firstNumber.value + +secondNumber.value
        ).toFixed(3);
        break;
      case OPERATORS.MINUS:
        resultField.textContent = (
          firstNumber.value - secondNumber.value
        ).toFixed(3);
        break;
      case OPERATORS.MULTI:
        resultField.textContent = (
          firstNumber.value * secondNumber.value
        ).toFixed(3);
        break;
      case OPERATORS.DIVISION:
        resultField.textContent = (
          firstNumber.value / secondNumber.value
        ).toFixed(3);
        break;
    }
  }
}

equalButton.addEventListener("click", calculate);
