const OPERATORS = {
  ADD: "+",
  MULTI: "*",
  SUBTRACT: "-",
  DIVIDE: "/",
};

function calc() {
  let result;
  let valueNumberOne = document.getElementById("numberOne").value;
  let valueNumberTwo = document.getElementById("numberTwo").value;
  let operator = document.getElementById("mathOperator").value;
  const equation = document.querySelector(".equation");

  if (isNaN(valueNumberOne) || isNaN(valueNumberTwo)) {
    alert("You should use numbers!");
  } else {
    let numberOne = +valueNumberOne;
    let numberTwo = +valueNumberTwo;

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
          alert("Division by 0 isn't allowed here");
        } else {
          result = numberOne / numberTwo;
          break;
        }

      default:
        result = "something is wrong";
    }
  }

  equation.textContent = result;
}

let buttonEquals = document.getElementById("forEqual");
buttonEquals.addEventListener("click", calc);
