'use strict';

import { OPERATIONS } from "./constants";
import { strip, checkIsResult } from "./utils";

// Variables
const firstNumber = document.getElementById('first-number');
const secondNumber = document.getElementById('second-number');
const select = document.getElementById('operations');
const btn = document.querySelector('.calculator__btn-result');
const resultOperation = document.querySelector('.calculator__result');
const resultsOperation = document.querySelector('.calculator__results');

function resetFields() {
  firstNumber.value = '';
  secondNumber.value = '';
}

const calc = (a, b, operation) => {
  if (a === '' || b === '') {
    return 'You need fill the fields!';
  }

  const firstNum = Number(a);
  const secondNum = Number(b);

  if (isNaN(firstNum) || isNaN(secondNum)) {
    return 'Error!';
  }

  switch (operation) {
    case OPERATIONS.ADDITION:
      return strip(firstNum + secondNum);

    case OPERATIONS.SUBSCRIBING:
      return strip(firstNum - secondNum);

    case OPERATIONS.MULTIPLICATION:
      return strip(firstNum * secondNum);

    default:
      return checkIsResult(strip(firstNum / secondNum));
  }
};

function createNewResult (value) {
  if (isNaN(Number(value))) {
    return null;
  }

  const newEl = document.createElement('span');
  newEl.classList.add('new-result');
  newEl.textContent = value;
  newEl.addEventListener('click', () => {
    resultsOperation.removeChild(newEl);
  })

  resultsOperation.appendChild(newEl);
}

// App
btn.addEventListener('click', function () {
  const result = calc(firstNumber.value, secondNumber.value, select.value);

  resultOperation.innerText = result;
  createNewResult(result);
  resetFields();
});
