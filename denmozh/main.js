function calc (operation, a, b) {
  switch (operation) {
    case "add":
      return a + b;
    case "multi":
      return a * b;
    case "subtract":
      return a - b;
    default:
      return "type operation no found";
  }
};

let result = calc("multi", 3, 5);
console.log(result);
