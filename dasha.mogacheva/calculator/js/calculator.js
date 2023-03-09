import {removeResult} from './remove-result.js';

const firstNumber = document.querySelector('.firstNumber');
const secondNumber = document.querySelector('.secondNumber');
const operation = document.querySelector('.operation');
const button = document.querySelector('.result-button');

const result = document.querySelector('.result');
const oldResult = document.querySelector('.result-list');


const resetValueInput = () => {
    firstNumber.value = '';
    secondNumber.value = '';
    //result.textContent = '';
}

const getResult = () => {
    const valueFirstNumber = +firstNumber.value;
    const valueSecondNumber = +secondNumber.value;
    const operationValue = operation.value;


    const calc = () => {
        switch (operationValue) {
            case '+':
                return valueFirstNumber + valueSecondNumber;
            case '-':
                return valueFirstNumber - valueSecondNumber;
            case '*':
                return valueFirstNumber * valueSecondNumber;
            case '/':
                if (valueSecondNumber === 0) {
                    return 'Can\'t divide by zero';
                }
                return valueFirstNumber / valueSecondNumber;
        }
    }
    result.textContent = calc();

    const newElem = document.createElement('p');
    newElem.textContent = `${valueFirstNumber} ${operationValue} ${valueSecondNumber} = ${calc()}`;
    oldResult.insertAdjacentElement('afterbegin', newElem);
    resetValueInput();
    const arrayResult = document.querySelectorAll('.result-list p');
    removeResult(arrayResult);
}


// const removeResult = (array) => {
//     array.forEach(elem => {
//         elem.addEventListener('click', () => {
//             elem.remove();
//         });
//     })
// }

button.addEventListener('click', getResult);

