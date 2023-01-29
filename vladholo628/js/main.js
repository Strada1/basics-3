const calc = (a, b, operation) => {
  switch (operation) {
    case "add":
      return a + b;
    case "multi":
      return a * b;
    case "subtract":
      return a - b;

    default:
      return "Invalid Operation";
  }
};

console.log(calc(1, 5, "add"));
