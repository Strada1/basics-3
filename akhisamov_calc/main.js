
function calc (operation, a, b) {
    switch (operation) {
        case ('add'):
            return a + b;
            break;
        case ('multi'):
            return a * b;
            break;
        case ('subtract'):
            return a - b;
            break;
        default:
            ('Введите корректные операции.')
    }
}

console.log(calc('add', 5, 13));
console.log(calc('subtract', 15, 4));
console.log(calc('multi', 3, 7));









/*
function calc (operation, a, b) {
    if (operation == 'add') {
        return a + b;
    } else if (operation == 'multi') {
        return a * b;
    } else if (operation == 'subtract') {
        return a - b;
    }
}
*/

