alert(calc());

function calc() {
    let operation = prompt('enter the name of the operation: choose +, - or *', '');
    if (!(operation === '+') && !(operation === '-') && !(operation === '*')) {
        return 'You have entered the wrong operation name. Try again';
    }
    let a = prompt('enter the first number', '');
    if (Number.isNaN(Number(a))) {
        return 'You entered the number incorrectly. Try again';
    }
    let b = prompt('enter the second number', '');
    if (Number.isNaN(Number(b))) {
        return 'You entered the number incorrectly. Try again';
    }
    if (operation === '+') {
        return Number(a) + Number(b);
    }
    if (operation === '*') {
        return Number(a) * Number(b);
    }
    if (operation === '-') {
            return Number(a) - Number(b);
    }
}