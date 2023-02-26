let result = document.getElementById('operationResult');
let button = document.getElementById('resultButton');

function calculate() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let operators = document.getElementById('operators').value;

    switch (operators) {
        case 'add':
            result = +num1 + +num2;
            break;
        case 'multi':
            result = num1 * num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'division':
            result = num1 / num2;
            break;
    };

    document.getElementById('operationResult').textContent = result;

};

button.addEventListener('click', calculate);


