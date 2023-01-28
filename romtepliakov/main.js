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

calc("subtract", 5, 7);
calc("multi", 5, 7);
calc("add",1,2);
