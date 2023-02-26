'use strict'

import {number1, number2, getElement, result, showDiv} from '/variables.js'

const createOperation = () => {
    const num1 = number1.value;
    const num2 = number2.value;
    let oper = getElement.value;
    let res;

    switch (oper) {
        case 'plus':
            res = Number(num1) + Number(num2);
            break;
        case 'minus':
            res = Number(num1) - Number(num2);
            break;
        case 'divide':
            res = Number(num1) / Number(num2);
            break;
        case 'multiply':
            res = Number(num1) * Number(num2);
            break;
    }

    if (res == Infinity || isNaN(res)) {res = 'Cannot divide by zero'}
    if (num1 === '' || num2 === '') {res = 'Enter the number'}


    let div = document.createElement('div')
    div.classList.add('new-div')
    div.style.backgroundColor = 'rgb(144, 161, 146)'
    showDiv.appendChild(div)
    div.textContent = res
}

document.addEventListener('click', searchDiv => {
    if (searchDiv.target.classList.contains('new-div')){searchDiv.target.remove()}
})
document.removeEventListener('click', searchDiv => {
    if (searchDiv.target.classList.contains('new-div')){searchDiv.target.remove()}
})
result.addEventListener('click', createOperation)
