import {operators, operandFirst, operandSecond, displayResult} from './vars.js';

export function Calc() {
    let result;
    let operator = operators.value;
    let a = Number(operandFirst.value);
    let b = Number(operandSecond.value);

    switch (operator) {
        case 'addition':
            result = a + b;
            break;

        case 'subtraction':
            result = a - b;
            break;

        case 'multiplication':
            result = a * b;
            break;

        case 'division':
            result = b !== 0 ? a / b : 'Деление на ноль невозможно';
            break;
    }
    displayResult.textContent = result;
    return result;
}

