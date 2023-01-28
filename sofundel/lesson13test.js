function calc(a, b, operation) {
    if (operation === 'add') {
        return a + b;
    } else if (operation === 'multi') {
        return a * b;
    } else if (operation === 'subtract') {
        return a - b;
    } else return 'Неверный оператор';
}

function calcSwitch(a, b, operation) {
    switch (operation) {
        case 'add':
            return a + b;
        case 'multi':
            return a * b;
        case 'subtract':
            return a - b;
        default:
            return 'Неверный оператор';
    }
}

const a = 0;
const b = -2;
const operation = 'add';


if (typeof a !== 'number' || typeof b !== 'number') {
    console.log('a или b - не число');
} else {
    const result = calc(a, b, operation);
    console.log(result);

    const resultSwitch = calcSwitch(a, b, operation);
    console.log(resultSwitch);
}
