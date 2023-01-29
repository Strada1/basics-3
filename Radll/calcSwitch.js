const add = "+";
const multi = "*";
const substruct = "-";

function calc(operation, a, b) {
  if (isNaN(a) || isNaN(b)) {
    console.log("Это не число");
  }
  switch (operation) {
    case "add":
      return a + b;
    case "multi":
      return a * b;
    case "substruct":
      return a - b;
  }
}
console.log(calc("add", "jdghgg", 2));
console.log(calc("multi", 2, 2));
console.log(calc("substruct", 2, 2));
console.log(calc("substruct", 0, 2));
