export function calc(operation, a, b) {
    function add(a, b) {
        return a + b;
    }
    function multi(a, b) {
        return a * b;
    }
    function subtract(a, b) {
        return a - b;
    }
    function divide(a, b) {
        return (a / b).toFixed(4);
    }

    if ((!a || !b) && (a !== 0 || b !== 0)) { return 'Error'; }
    if ((operation === '/' || operation === 'divide') && b === 0) { return 'Error' }

    switch (operation) {
        case '+':
        case 'add':
            return add(a, b);
        case '*':
        case 'multi':
            return multi(a, b);
        case '-':
        case 'subtract':
            return subtract(a, b);
        case '/':
        case 'divide':
            return divide(a, b)
        default:
            return 'Error';
    }
}


/*
const button = document.getElementById('button');
const resultDivs = document.getElementById('resultDivs'); // Сборник результатов

button.addEventListener('click', () => {
    const a = Number(document.getElementById('firstNumber').value);
    const b = Number(document.getElementById('secondNumber').value);
    
    const select = document.getElementById('operationSelect');
    const selectedOption = select.selectedIndex;
    const options = select.options;
    const operation = options[selectedOption].textContent;

    const result = calc(operation, a, b);

    document.getElementById('result').textContent = result;

    // Добавление результатов
    // ниндзя код

    const resultDiv = document.createElement('div');
    
    resultDiv.textContent = result;
    resultDiv.style.cursor = 'pointer';
    resultDiv.style.margin = '2px 0 2px 0';

    resultDivs.appendChild(resultDiv);
})

resultDivs.addEventListener('click', (event) => {
    event.target.remove();
});
*/