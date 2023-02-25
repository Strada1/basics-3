const firstNumber = document.getElementById('first_number');
const secondNumber = document.getElementById('second_number');
const sign = document.getElementById('sign');
const buttonEquals = document.getElementById('equals');
const value = document.getElementById('value');

let a = null;
let b = null;
let operation = null;



function calc(a, b, operation) {
    const isNotValid = (operation === undefined) || (a === undefined) || (b === undefined) ||
        (typeof (a) !== 'number') || (typeof (b) !== 'number');
    if (isNotValid) {
        return 'Error, try again!';
    }
    switch (operation) {
        case 'add':
            return +a + +b;
        case 'multy':
            return a * b;
        case 'sub':
            return a - b;
        case 'div':
            if (b === 0) {
                return 'Error';
            } else {
                return a / b;
            }
    }
    alert(5)
}

buttonEquals.addEventListener('click', runCalc);

function runCalc() {
    a = firstNumber.value;
    b = secondNumber.value;
    operation = sign.value;
    value.textContent = calc(+a, +b, operation);
    a = null;
    b = null;
}







