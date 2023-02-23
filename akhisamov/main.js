const elements = {
    numberOne: document.querySelector('#numberOne'),
    operation: document.querySelector('#operation'),
    numberTwo: document.querySelector('#numberTwo'),
    confirmation: document.querySelector('#confirmation'),
    result: document.querySelector('#result')   
}

function calc () {
    let a = Number(elements.numberOne.value);
    let b = Number(elements.numberTwo.value);
    let result1;
    if (isNaN(a) || isNaN(b)) {
        alert('Вводите только числа!')
    } else {
        switch(elements.operation.value) {
            case ('+'):
                result1 = a + b;
                break;
            case ('-'):
                result1 = a - b;
                break;
            case ('*'):
                result1 = a * b;
                break;
            case ('/'):
                if (b === 0) {
                    result1 = 'Нельзя делить на 0!'
                    break;
                } else {
                    result1 = Math.floor((a / b) * 100) / 100;
                    break;
                }
            default:
                result1 = 'Некорректные данные';
        }
    }
    elements.result.textContent = result1;
}

elements.confirmation.addEventListener('click', calc);

