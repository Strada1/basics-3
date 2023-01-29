function calc(operation, a, b) {
  if (isNaN(a) || isNaN(b)) {
    console.log("You should write numbers, not symbols");
  } else {
    switch (operation) {
      case "add":
      case "+":
        return a + b;

      case "multi":
      case "*":
        return a * b;

      case "subtract":
      case "-":
        return a - b;

      default:
        console.log("no result");
    }
  }
}
console.log(calc("add", "h", 7));
console.log(calc("+", 3, 7));
console.log(calc("*", 3, 5));
console.log(calc("multi", 3, 5));
console.log(calc("-", -1, 6));
console.log(calc("subtract", -1, 6));
