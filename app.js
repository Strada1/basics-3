'use strict';

const firstNumber = document.getElementById('first-number');
const secondNumber = document.getElementById('second-number');
const select = document.getElementById('operations');
const btn = document.querySelector('.btn-result');
const resultOperation = document.querySelector('.result');

const calc = (a, b, operation) => {
  const firstNum = parseFloat(a);
  const secondNum = parseFloat(b);

  if (isNaN(firstNum) || isNaN(secondNum)) {
    console.error(`Type of the data isn't correct! Please, use only numbers!`);
    return '';
  }

  switch (operation) {
    case 'addition':
      return firstNum + secondNum;

    case 'subscribing':
      return firstNum- secondNum;

    case 'multiplication':
      return firstNum * secondNum;

    default:
      return firstNum / secondNum;
  }
};

const resetFields = () => {
  firstNumber.value = '';
  secondNumber.value = '';
};

btn.addEventListener('click', function () {
  resultOperation.innerText = calc(firstNumber.value, secondNumber.value, select.value);

  resetFields();
});
