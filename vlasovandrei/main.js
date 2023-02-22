const equal = document.getElementById('equal');
equal.addEventListener('click', calc);

function calc() {
    const output = document.getElementById('output');
    const a = document.getElementById('numberA').value;
    const b = document.getElementById('numberB').value;
    const operation = document.getElementById('select').value;
    const calculator = document.getElementById('calculator');
    const container = document.getElementById('container');

    function ifError() {
        let timerId = setInterval(() => {
            calculator.classList.toggle("error");
            container.classList.toggle("container-error");
        }, 500)
        setTimeout(() => { clearInterval(timerId) }, 2000);
    }

    if (isNaN(a) || isNaN(b) || a === '' || b === '') {
        ifError();
    } else {
        let result;
        switch (operation) {
            case 'add':
                result = +a + +b;
                break;
            case 'multi':
                result = a * b;
                break;
            case 'subtract':
                result = a - b;
                break;
            case 'divide':
                if (+b === 0) { ifError() }
                else {
                    result = a / b;
                    break;
                }
        }
        output.textContent = result.toFixed(2);
    }
}


