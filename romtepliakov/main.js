function calc(operation, a, b) {
  switch (operation) {
    case "add":
      console.log(a + b);
      break;
    case "multi":
      console.log(a * b);
      break;
    case "subtract":
      console.log(a - b);
      break;
    default:
      console.log("Нет такого выражения");
  }
}

calc("subtract", 2, 7);
calc("multi", 2, 7);
