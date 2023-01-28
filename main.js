/* Калькулятор */

function calc(a, b, operation) {
  let result;

  switch (operation) {
    case "add":
      result = a + b;
      console.log(result);
      break;
    case "multi":
      result = a * b;
      console.log(result);
      break;
    case "subtract":
      result = a - b;
      console.log(result);
      break;
  }
}

calc(1, 2, "multi");
