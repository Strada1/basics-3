const firstNumberInput = document.getElementById("firstNumberInput");
const secondNumberInput = document.getElementById("secondNumberInput");
const resultScreen = document.querySelector(".calculator__result");
const submitButton = document.querySelector(".calculator__form-button");
const operationSelect = document.querySelector(".calculator__form-select");

console.log(operationSelect.value);
const OPERATIONS = {
  "+": "sum",
  "-": "sub",
  "*": "multi",
  "/": "divide",
};

const calc = (a, b, operation) => {
  const numbersAreValid = typeof a === "number" && typeof b === "number";
  if (!numbersAreValid) {
    console.log("Invalid Operands");
  }

  switch (operation) {
    case "sum":
      return a + b;
    case "sub":
      return a - b;
    case "multi":
      return a * b;
    case "divide":
      return a / b;

    default:
      console.log("Invalid Operation");
  }
};

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  const firstNumber = Number(firstNumberInput.value);
  const secondNumber = Number(secondNumberInput.value);
  const selectedOperation = OPERATIONS[operationSelect.value];
  const result = calc(firstNumber, secondNumber, selectedOperation);

  resultScreen.textContent = result;
});
