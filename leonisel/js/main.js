const buttonEqual = document.getElementById('button-equal');
const inputs = document.querySelectorAll('.input-wrapper_window');
const select = document.querySelectorAll('.select');
const resultEqual = document.getElementById('result');

let leftInputValue;
let rightInputValue;
let operator;

function calc(operation, a, b) {
  if(!isFinite(a) || !isFinite(b) || a === '' || b === '') {
    return 'введите число';
  }
  if(operation === 'division' && b === 0) {
    return 'на 0 делить нельзя';
  }
  if(!operation) {
    return 'выберите оператора';
  }
  const aNum = Number(a);
  const bNum = Number(b);

  switch(operation) {
    case 'add':
      return aNum + bNum;
      break;
    case 'multi':
      return aNum * bNum;
      break;
    case 'subtract':
      return aNum - bNum;
      break;
    case 'division':
      return aNum / bNum;
      break;  
  }
}

function getInput(e) {
  if(e.target.id == 'input-left') {
    leftInputValue = +e.target.value;
  }
  if(e.target.id == 'input-right') {
    rightInputValue = +e.target.value; 
  }
}

function getOperator(e) {
  switch(e.target.value){
    case '+':
      operator = 'add';
      break;
    case '-':
      operator = 'subtract';
      break;
    case '*':
      operator = 'multi';
      break;
    case '/':
      operator = 'division';
      break;      
  }
}

function getEqual() {
  const result = calc(operator, leftInputValue, rightInputValue);
  resultEqual.textContent = result;
}

for (const input of inputs) {
  input.addEventListener('input', getInput);
}

for (let option of select) {
  option.addEventListener('change', getOperator);
}

buttonEqual.addEventListener('click', getEqual);
