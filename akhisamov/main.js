import {elements} from './modules/elements.js';
import {deleteAnswer} from './modules/deleteAnswer.js';
import {addAnswers} from './modules/addAnswers.js';

elements.confirmation.addEventListener('click', calc);
elements.result_div.addEventListener('click', deleteAnswer);

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




