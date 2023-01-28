function calc(operation, a, b) {
    switch (operation) {
        case "add":
            return a + b;
        case "multi":
            return a * b;
        case "substract":
            return a - b;
        default:
            return "unvalid operation"
    }
}
console.log(calc("add", 2, 4))