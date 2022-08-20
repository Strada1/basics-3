
function calc(operation, a, b) {
    let result;
    switch (operation) {
        case '+':
            result = a + b;
            break;
        case '*':
            result = a * b;
            break;
        case '-':
            result = a - b;
            break;
    }
    return result;
}

console.log(calc('+', 1, 2));
console.log(calc('*', 1, 2));
console.log(calc('-', 3, 2));



