const elements = {
    numberOne: document.querySelector('#numberOne'),
    operation: document.querySelector('#operation'),
    numberTwo: document.querySelector('#numberTwo'),
    confirmation: document.querySelector('#confirmation'),
    result: document.querySelector('#result'),
    result_div: document.querySelector('.result_div')
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
    answer(result1)
    addAnswers(result1);
}

function answer (item) {
    elements.result.textContent = item;
}

function addAnswers (item) {
    const newDiv = document.createElement('div');
    newDiv.textContent = item;
    elements.result_div.append(newDiv);
}

function deleteAnswer (event) {
    elements.result_div.removeChild(event.target);
}

elements.confirmation.addEventListener('click', calc);
elements.result_div.addEventListener('click', deleteAnswer);


