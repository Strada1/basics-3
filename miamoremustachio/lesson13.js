function calc(operation, a, b) {
    switch (operation) {
        case 'add':
            return a + b;
        case 'multi':
            return a * b;
        case 'subtract':
            return a - b;
        default:
            return 'failed to recognize operation';
    }
}

let addResult = calc('add', 1, 2);
console.log(addResult);

let multiResult = calc('multi', 1, 2);
console.log(multiResult);

let subtractResult = calc('subtract', 3, 2);
console.log(subtractResult);

let bonusResult = calc('superduperoperation', 4, 2);
console.log(bonusResult);