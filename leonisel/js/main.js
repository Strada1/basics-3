import {calc} from './calc.js';

// const buttonEqual = document.getElementById('button-equal');
// const inputs = document.querySelectorAll('.input-wrapper_window');
// const select = document.querySelectorAll('.select');
// const resultEqual = document.getElementById('result');
// const output = document.querySelector('.output');

// let leftInputValue;
// let rightInputValue;
// let operator;

// function getInput(e) {
//   if(e.target.id == 'input-left') {
//     leftInputValue = +e.target.value;
//   }
//   if(e.target.id == 'input-right') {
//     rightInputValue = +e.target.value; 
//   }
// }

// function getOperator(e) {
//   switch(e.target.value){
//     case '+':
//       operator = 'add';
//       break;
//     case '-':
//       operator = 'subtract';
//       break;
//     case '*':
//       operator = 'multi';
//       break;
//     case '/':
//       operator = 'division';
//       break;      
//   }
// }

// function getOutput(num) {
//   const newOutput = document.createElement('div');
//   newOutput.classList.add('output-items');
//   output.prepend(newOutput);
//   newOutput.textContent = num;
// }

// function getEqual() {
//   const result = calc(operator, leftInputValue, rightInputValue);
//   resultEqual.textContent = result;
//   getOutput(result);
// }

// for (const input of inputs) {
//   input.addEventListener('input', getInput);
// }

// for (const option of select) {
//   option.addEventListener('change', getOperator);
// }

// buttonEqual.addEventListener('click', getEqual);

// output.addEventListener('click', function(event){
//   let target = event.target;
//   if(target.classList.contains('output-items')) {
//     target.remove();
//   }
// });