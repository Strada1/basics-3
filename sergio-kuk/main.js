
function calc(operation, a, b) {
    let result;
    if (typeof a != 'number' || typeof b != 'number') {
        console.log('Неверный тип аргумента. Должно быть два числа');
        return;
    }
    switch (operation) {
        case 'add': 
            result = a + b;
            break;
        case 'multi': 
            result = a * b;
            break;
        case 'subtract':
            result = a - b;
            break;
        default:
            console.log('Неизвестное действие');
    }
    return result;
}

let r;
r = calc('add', 1, 2);      // 3
console.log(r);

r = calc('multi', 1, 2);    // 2
console.log(r);

r = calc('subtract', 11, 2);    // 9
console.log(r);

r = calc('divide', 10, 2);
console.log(r);

r = calc('subtract', '11', 2);
console.log(r);

