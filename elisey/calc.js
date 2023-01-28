function calc(operation, a, b) {
  switch (operation) {
    case "add":
      console.log(a + b);
      break;
    case "multi":
      console.log(a * b);
      break;
    case "substract":
      console.log(a - b);
      break;
    default:
      console.log("Incorrect operation type!");
  }
}

calc("add", 1, 2);
calc("multi", 1, 2);
calc("substract", 3, 2);
