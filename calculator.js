function calc(a, b, operation) {
  switch (operation) {
    case "add":
      return console.log(a + b);
    case "multi":
      return console.log(a * b);
    case "subtract":
      return console.log(a - b);
  }
}

calc(5, 3, "add");
calc(3, 346, "multi");
calc(8, 23, "subtract");
calc(546, 6, "add");
calc(654, 95, "multi");
calc(96, 65, "subtract");
