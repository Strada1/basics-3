
function calc( a, operation, b) {
    
    switch (operation) {
        case '+':
            return a + b;
        
        case '*':
            return a * b;

        case '-':
            return a - b;
    
        default:
            break;
    }
}
  // if (operation == '+') {
    //     return a + b;
    // }
    // else if (operation == '*') {
    //     return a * b;
    // }
    // else if (operation == '-') {
    //     return a - b;
    // }
    
let add = calc(7, '-', 2); // 5
let multi = calc(6, '+', 6); // 12
let subtract = calc(17, '/', 27); //459
console.log(add);
console.log(multi);
console.log(subtract);