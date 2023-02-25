export const calc = (a, b, operation) => {
    const numbersAreValid = typeof a === "number" && typeof b === "number";
    if (!numbersAreValid) {
      console.log("Invalid Operands");
    }
  
    switch (operation) {
      case "sum":
        return a + b;
      case "sub":
        return a - b;
      case "multi":
        return a * b;
      case "divide":
        return a / b;
  
      default:
        console.log("Invalid Operation");
    }
  };