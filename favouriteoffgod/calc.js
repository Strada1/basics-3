function calc(operation, a, b) {
    switch (operation) {
        case "add":
            return a + b;
            break;
        case "multy" :
            return a * b;
            break;
        case "subtract":
            return a - b;
            break;
        default:
            return "Incorrect operation";
    }
}

console.log(calc('add', 1, 2));
console.log(calc('multy', 1, 2));
console.log(calc('subtract', 3, 2));