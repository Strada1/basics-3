function calc(operation, a, b) {
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

let button = document.getElementById('button');

button.addEventListener('click', () => {
    let a = Number(document.getElementById('firstNumber').value);
    let b = Number(document.getElementById('secondNumber').value);
    
    let select = document.getElementById('operation');
    let selectedOption = select.selectedIndex;
    const options = select.options;
    operation = options[selectedOption].textContent;

    document.getElementById('result').textContent = calc(operation, a, b);
})