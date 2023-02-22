'use strict'

const number1 = document.querySelector(".number1")
const number2 = document.querySelector('.number2')
const getElement = document.querySelector('.select')
const result = document.querySelector('.buttonResult')
const showResult = document.querySelector('.showResult')
const createOperation = () => {
    const num1 = Number(number1.value);
    const num2 = Number(number2.value);
    let oper = getElement.value;
    let res;


    switch (oper) {
        case 'plus':
            res = num1 + num2;
            break;
        case 'minus':
            res = num1 - num2;
            break;
        case 'divide':
            res = num1 / num2;
            break;
        case 'multiply':
            res = num1 * num2;
            break;
    }

    showResult.textContent = res
}

result.addEventListener('click', createOperation)
