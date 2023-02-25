function calc(operation, a, b) {
  if (operation === "add" && typeof a === "number" && typeof b === "number") {
    return a + b;
  } else if (
    operation === "subtract" &&
    typeof a === "number" &&
    typeof b === "number"
  ) {
    return a - b;
  } else if (
    operation === "multi" &&
    typeof a === "number" &&
    typeof b === "number"
  ) {
    return a * b;
  }
}

console.log(calc("add", 2, 3));

// Калькулятор с switch

function calc(operation, a, b) {
  switch (operation) {
    case "add":
      a + b;
      break;
    case "subract":
      a - b;
      break;
    case "multi":
      a * b;
      break;
  }
}

console.log(calc("add", 2, 3));

// practice from javascript for kids


