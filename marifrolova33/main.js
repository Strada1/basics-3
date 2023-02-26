import { OPERATORS } from "./constants.js";

function calc() {
  let result;
  let valueNumberOne = document.getElementById("numberOne").value;
  let valueNumberTwo = document.getElementById("numberTwo").value;
  let operator = document.getElementById("mathOperator").value;
  const equation = document.querySelector(".equation");

  if (isNaN(valueNumberOne) || isNaN(valueNumberTwo)) {
    alert("You should use numbers!");
  } else {
    let numberOne = parseFloat(valueNumberOne);
    let numberTwo = parseFloat(valueNumberTwo);

    switch (operator) {
      case OPERATORS.ADD:
        result = numberOne + numberTwo;
        break;

      case OPERATORS.MULTI:
        result = numberOne * numberTwo;

        break;

      case OPERATORS.SUBTRACT:
        result = numberOne - numberTwo;
        break;

      case OPERATORS.DIVIDE:
        if (numberTwo === 0) {
          alert("division by 0");
          result = "";
        } else {
          result = numberOne / numberTwo;
          break;
        }
      default:
        result = "something is wrong";
    }
  }

  if (isFinite(result)) {
    if (Number.isInteger(result)) {
      equation.textContent = result;
    } else {
      equation.textContent = result.toFixed(3);
    }
  } else {
    equation.textContent = "";
  }

  //Вывод истории вычислений
  const newDivForResult = document.createElement("div");
  newDivForResult.classList.add("divForResult");
  if (isFinite(result)) {
    if (Number.isInteger(result)) {
      newDivForResult.textContent = result;
    } else {
      newDivForResult.textContent = result.toFixed(3);
    }
  } else {
    newDivForResult.textContent = "The result is undefined";
  }
  document.body.appendChild(newDivForResult);

  function remove() {
    newDivForResult.remove();
  }
  newDivForResult.addEventListener("click", remove);
}

let buttonEquals = document.getElementById("forEqual");
buttonEquals.addEventListener("click", calc);
