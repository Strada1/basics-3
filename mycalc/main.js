function calc(a, b, operation) {
  let result;
  switch (operation) {
    case "add":
      result = a + b;
      break;
    case "multi":
      result = a * b;
      break;
    case "subtract":
      result = a - b;
      break;
  }
  return result;
}

console.log(calc(1, 2, "add"));
console.log(calc(1, 2, "multi"));
console.log(calc(3, 2, "subtract"));
s