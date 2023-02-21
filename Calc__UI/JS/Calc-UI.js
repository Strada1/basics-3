'use strict';

function sum(a,b) {
  return a + b;
}

function substract(a,b) {
  return a - b;
}

function multiply(a,b) {
  return a * b;
}

function division(a,b) {
  return a / b;
}

const OPERATIONS = {
  sum: '+',
  substract: '-',
  multiply: '*',
  division: '/',
};

function calculate(a, b, operation) {
  let result = null;

  switch (operation) {
    case OPERATIONS.sum:
      result = sum(a, b);
      break;
    case OPERATIONS.substract:
      result = substract(a, b);
      break;
    case OPERATIONS.multiply:
      result = multiply(a, b);
      break;
    case OPERATIONS.division:
      result = division(a, b);
      break;

    default:
      break;
  }

  return result;
}

const inputANode = document.querySelector('.firstNum');
const selectOperationNode = document.querySelector('.selectOperation');
const inputBNode = document.querySelector('.secondNum');
const btnResultNode = document.querySelector('.resultButton ');
const outputNode = document.querySelector('.outputResult');

btnResultNode.addEventListener('click', function() {
  const a = Number(inputANode.value);
  const b = Number(inputBNode.value);
  const operation = selectOperationNode.value;

  const result = calculate({
    a,b,operation
  });
  console.log(result);
});


function buildFun(n){

	var res = []

	for (let i = 0; i< n; i++){
		res.push(function(){

      return i
      console.log(i)
		})
	}
	return res
}

console.log(buildFun(10));