let operators = document.querySelector('.operators');
let operandFirst = document.querySelector('.operand-first');
let operandSecond = document.querySelector('.operand-second');
let displayResult = document.querySelector('.result');
let btnEquals = document.querySelector('.btn-equals');

function Calc() {
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

function CalculationResults() {
    const newDiv = document.createElement('div');
    newDiv.className = 'old-result';
    newDiv.textContent = Calc();
    document.body.appendChild(newDiv);
    newDiv.addEventListener('click', () => newDiv.remove());
}

btnEquals.addEventListener('click', function () {
    Calc();
    CalculationResults();
});