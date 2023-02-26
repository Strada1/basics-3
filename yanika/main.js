'use strict'

import {number1, number2, getElement, result, showDiv} from '/variables.js'

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
    let div = document.createElement('div')
    div.classList.add('new-div')
    showDiv.appendChild(div)
    div.textContent = res
}

document.addEventListener('click', searchDiv => {
    if (searchDiv.target.classList.contains('new-div')){searchDiv.target.remove()}
})
result.addEventListener('click', createOperation)
